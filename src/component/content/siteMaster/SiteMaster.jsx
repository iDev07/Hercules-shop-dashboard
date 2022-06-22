import React, { useEffect, useState } from "react";
import { getAction } from "../../../redux/actions/readAction";

import { CategoryCopy } from "../../helpers/CategoryCopy";
import { useDispatch, useSelector } from "react-redux";
import { GET_SITE_MASTER } from "../../../redux/actions/types";
import { Form } from "antd";
import { OnChange } from "../../helpers/OnChange";
import { CreateCategory } from "../../helpers/CreateCategory";
import { useTranslation } from "react-i18next";

export function SiteMaster() {
  const { language } = useSelector((state) => state.langReducer);

  const { t } = useTranslation();
  const map = [
    { id: "1", id2: "siteMainContent", label: t("siteMasterLabel1") },
  ];
  const { master } = useSelector((state) => state.master_reducer);
  const dispatch = useDispatch();
  const [fileUrl, setfileUrl] = useState(null);
  const [form] = Form.useForm();
  const { onChangesitemasterPageInfoes } = OnChange(setfileUrl);
  const showCreateModal = () => {
    setCreateVisible(true);
  };
  const [createVisible, setCreateVisible] = useState(false);
  useEffect(() => {
    dispatch(getAction("sitemasterPageInfoes", GET_SITE_MASTER));
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field:
        language === "uz" ? (
          "description_uz"
        ) : language === "en" ? (
          "description_en"
        ) : language === "ru" ? (
          "description_ru"
        ) : (
          <></>
        ),
      headerName: t("pageHeaderNameDesc"),
      width: 105,
    },
    {
      field:
        language === "uz" ? (
          "title_uz"
        ) : language === "en" ? (
          "title_en"
        ) : language === "ru" ? (
          "title_ru"
        ) : (
          <></>
        ),
      headerName: t("pageHeaderNameTitle"),
      width: 105,
    },
    { field: "facebookUrl", headerName: "Facebook Url", width: 105 },
    { field: "instagramUrl", headerName: "Instagram Url", width: 105 },
    { field: "tvitterUrl", headerName: "Tvitter Url", width: 105 },
    {
      field: "serviceText",
      headerName: t("serviceTitle") + " " + t("siteHeaderName1"),
      width: 105,
    },
    {
      field: "aboutText",
      headerName: t("aboutTitle") + " " + t("siteHeaderName1"),
      width: 105,
    },
    {
      field: "contactText",
      headerName: t("contactTitle") + " " + t("siteHeaderName1"),
      width: 105,
    },
    {
      field: "logoUrl",
      headerName: "Logo Url",
      width: 105,
      renderCell: (params) => {
        return !params?.value?.includes("http") ? (
          <img src={"https://api.mservis.softcity.uz/" + params.value} alt="" />
        ) : (
          <img src={params.value} alt="" />
        );
      },
    },
  ];
  const { createHandleCancel, createsitemasterPageInfoes } = CreateCategory(
    setCreateVisible,
    form,
    fileUrl,
    dispatch
  );
  return (
    <div>
      <CategoryCopy
        map={map}
        title={t("siteMasterTitle")}
        showCreateModal={showCreateModal}
        createVisible={createVisible}
        createHandleCancel={createHandleCancel}
        createsitemasterPageInfoes={createsitemasterPageInfoes}
        form={form}
        columns={columns}
        rows={master}
        onChangesitemasterPageInfoes={onChangesitemasterPageInfoes}
      />
    </div>
  );
}

