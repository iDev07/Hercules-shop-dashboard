import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_SERVICE_HEADER,
  GET_SERVICE_AUTO_REPAIRS,
  GET_SERVICE_REPAIRS,
} from "../../../redux/actions/types";
import { CategoryCopy } from "../../helpers/CategoryCopy";
import { getAction } from "../../../redux/actions/readAction";
import { OnChange } from "../../helpers/OnChange";
import { useTranslation } from "react-i18next";
import { CreateCategory } from "../../helpers/CreateCategory";

const Product = () => {
  const { t } = useTranslation();
  const [fileUrl, setfileUrl] = useState(null);
  const [form] = Form.useForm();
  const [createVisible, setCreateVisible] = useState(false);
  const {
    onChangeService,
    onChangeServiceAutoRepairs,
    onChangeServiceRepairs,
  } = OnChange(setfileUrl);
  const showCreateModal = () => {
    setCreateVisible(true);
  };

  const { header, auto_repairs, repairs } = useSelector(
    (state) => state.service_reducer
  );

  const dispatch = useDispatch();

  const map = [
    { id: "1", id2: "ServiceHome", label: t("serviceLabel1") },
    { id: "2", id2: "ServiceAutoRepair", label: t("serviceLabel2") },
    { id: "3", id2: "ServiceRapair", label: t("serviceLabel3") },
  ];

  useEffect(() => {
    dispatch(getAction("serviceHeaders", GET_SERVICE_HEADER));
    dispatch(getAction("serviceAutoRepairs", GET_SERVICE_AUTO_REPAIRS));
    dispatch(getAction("serviceRepairs", GET_SERVICE_REPAIRS));
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
  ];
  const columns2 = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "description_uz",
      headerName: t("pageHeaderNameDesc"),
      width: 135,
    },
    { field: "title_uz", headerName: t("pageHeaderNameTitle"), width: 135 },
    {
      field: "short_description_uz",
      headerName: "Short Description",
      width: 135,
    },
    {
      field: "fileUrl",
      headerName: "URL",
      width: 135,
      renderCell: (params) => (
        <img src={"https://api.mservis.softcity.uz/" + params.value} alt="" />
      ),
    },
  ];
  const {
    createHandleCancel,
    createServiceHeader,
    createserviceAutoRepairs,
    createserviceRepairs,
  } = CreateCategory(setCreateVisible, form, fileUrl, dispatch);

  return (
    <div>
      <CategoryCopy
        map={map}
        title={t("serviceTitle")}
        showCreateModal={showCreateModal}
        createVisible={createVisible}
        createHandleCancel={createHandleCancel}
        CreateServiceHeader={createServiceHeader}
        createserviceAutoRepairs={createserviceAutoRepairs}
        createserviceRepairs={createserviceRepairs}
        form={form}
        columns={columns}
        rows={header}
        columns2={columns}
        rows2={auto_repairs}
        columns3={columns2}
        rows3={repairs}
        onChangeService={onChangeService}
        onChangeServiceAutoRepairs={onChangeServiceAutoRepairs}
        onChangeServiceRepairs={onChangeServiceRepairs}
      />
    </div>
  );
};

export default Product;
