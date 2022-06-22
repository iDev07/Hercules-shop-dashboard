import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_CONTACT_HEDER,
  GET_CONTACT_INFO,
  GET_CONTACT_MAIN,
} from "../../../redux/actions/types";
import { CategoryCopy } from "../../helpers/CategoryCopy";
import { getAction } from "./../../../redux/actions/readAction";
import { OnChange } from "../../helpers/OnChange";
import { CreateCategory } from "../../helpers/CreateCategory";
import { useTranslation } from "react-i18next";

export function Contact() {
  const [fileUrl, setfileUrl] = useState(null);
  const [form] = Form.useForm();
  const { onChangContactHeader, onChangContactInfo } = OnChange(setfileUrl);
  const showCreateModal = () => {
    setCreateVisible(true);
  };
  const [createVisible, setCreateVisible] = useState(false);
  const { header, info, main } = useSelector((state) => state.contact_reducer);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const map = [
    { id: "1", id2: "ContactHeader", label: t("contactLabel1") },
    { id: "2", id2: "ContactInfo", label: t("contactLabel2") },
    { id: "3", label: t("contactLabel3") },
  ];

  useEffect(() => {
    dispatch(getAction("contactHeaders", GET_CONTACT_HEDER));
    dispatch(getAction("contactInfoes", GET_CONTACT_INFO));
    dispatch(getAction("contactMainsAPI", GET_CONTACT_MAIN));
  }, [dispatch]);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "description_uz",
      headerName: t("pageHeaderNameDesc"),
      width: 135,
    },
    { field: "title_uz", headerName: t("pageHeaderNameTitle"), width: 135 },
    {
      field: "fileUrl",
      headerName: "URL",
      width: 135,
      renderCell: (params) => (
        <img src={"https://api.mservis.softcity.uz/" + params.value} alt="" />
      ),
    },
    {
      field: "Action",
      headerName: t("pageHeaderName"),
      width: 135,
    },
  ];
  const columns2 = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "description_uz",
      headerName: t("pageHeaderNameDesc"),
      width: 125,
    },
    { field: "title_uz", headerName: t("pageHeaderNameTitle"), width: 125 },
    { field: "longitude", headerName: t("contactHeaderName1"), width: 125 },
    { field: "locationUrl", headerName: t("contactHeaderName2"), width: 125 },
    {
      field: "latutide",
      headerName: t("contactHeaderName3"),
      width: 125,
    },
    {
      field: "Action",
      headerName: t("pageHeaderName"),
      width: 125,
    },
  ];
  const columns3 = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: t("aboutHeaderName1"), width: 125 },
    { field: "surname", headerName: t("contactHeaderName4"), width: 125 },
    { field: "email", headerName: "eEmail", width: 125 },
    { field: "phone", headerName: t("contactHeaderName5"), width: 125 },
    { field: "message", headerName: t("contactHeaderName6"), width: 125 },
    {
      field: "Action",
      headerName: t("pageHeaderName"),
      width: 125,
    },
  ];
  const { createHandleCancel, createContactHeader, createContactInfo } =
    CreateCategory(setCreateVisible, form, fileUrl, dispatch);
  return (
    <div>
      <CategoryCopy
        title={t("contactTitle")}
        showCreateModal={showCreateModal}
        createVisible={createVisible}
        createHandleCancel={createHandleCancel}
        createContactHeader={createContactHeader}
        createContactInfo={createContactInfo}
        map={map}
        form={form}
        columns={columns}
        rows={header}
        columns2={columns2}
        rows2={info}
        columns3={columns3}
        rows3={main}
        onChangContactHeader={onChangContactHeader}
        onChangContactInfo={onChangContactInfo}
      />
    </div>
  );
}
