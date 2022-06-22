import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { CategoryCopy } from "../../helpers/CategoryCopy";
import { getAction } from "./../../../redux/actions/readAction";
import {
  GET_ABOUT_HEADER,
  GET_ABOUT_SUSPENSIONS,
  GET_ABOUT_EXPERIENCES,
  GET_ABOUT_VEHICLES,
  GET_ABOUT_PROFESSIONS,
  GET_ABOUT_SLIDERS,
  GET_ABOUT_VIDEOS,
} from "../../../redux/actions/types";
import { Form } from "antd";
import { CreateCategory } from "../../helpers/CreateCategory";
import { OnChange } from "../../helpers/OnChange";

export function About() {
  const { t } = useTranslation();
  const [fileUrl, setfileUrl] = useState(null);
  const [form] = Form.useForm();
  const [createVisible, setCreateVisible] = useState(false);
  const {
    onChangeAboutHome,
    onChangeAboutSuspention,
    onChangeAboutExperiance,
    onChangeAboutVehicle,
    onChangeAboutProfisson,
    onChangeAboutSliders,
    onChangeAboutVideo,
  } = OnChange(setfileUrl);
  const showCreateModal = () => {
    setCreateVisible(true);
  };
  const map = [
    { id: "1", id2: "AboutHeader", label: t("aboutLabel1") },
    { id: "2", id2: "AboutSuspention", label: t("aboutLabel2") },
    { id: "3", id2: "AboutExperiance", label: t("aboutLabel3") },
    { id: "4", id2: "AboutVehicle", label: t("aboutLabel4") },
    { id: "5", id2: "AboutProfisson", label: t("aboutLabel5") },
    { id: "6", id2: "AboutSlider", label: t("aboutLabel6") },
    { id: "7", id2: "AboutVideo", label: t("aboutLabel7") },
  ];
  const {
    headers,
    suspensions,
    experiences,
    vehicles,
    professions,
    sliders,
    videos,
  } = useSelector((state) => state.about_reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAction("aboutHeaders", GET_ABOUT_HEADER));
    dispatch(getAction("aboutIndoSuspensions", GET_ABOUT_SUSPENSIONS));
    dispatch(getAction("aboutInfoExperiences", GET_ABOUT_EXPERIENCES));
    dispatch(getAction("aboutInfoVehicles", GET_ABOUT_VEHICLES));
    dispatch(getAction("aboutProfessions", GET_ABOUT_PROFESSIONS));
    dispatch(getAction("aboutSliders", GET_ABOUT_SLIDERS));
    dispatch(getAction("aboutVideos", GET_ABOUT_VIDEOS));
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
  const columns1 = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "description_uz",
      headerName: t("pageHeaderNameDesc"),
      width: 135,
    },
    { field: "name_uz", headerName: t("aboutHeaderName1"), width: 135 },
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
  // https://www.mercedes-amg.com/content/global/en/world-of-amg/news/2022/the-new-official-fia-f1-safety-car-and-medical-car/jcr:content/stage/media/slides/slide_copy/media1/image.media1.responsive_full_viewport_16_9.1646925235791.jpeg
  const {
    createHandleCancel,
    createAboutHome,
    createAboutSuspention,
    createAboutExperiance,
    createAboutVehicle,
    createAboutProfisson,
    createAboutSliders,
    createAboutVideo,
  } = CreateCategory(setCreateVisible, form, fileUrl, dispatch);
  return (
    <div>
      <CategoryCopy
        title={t("aboutTitle")}
        createHandleCancel={createHandleCancel}
        map={map}
        form={form}
        createVisible={createVisible}
        CreateAboutHeader={createAboutHome}
        createAboutSuspention={createAboutSuspention}
        createAboutExperiance={createAboutExperiance}
        createAboutVehicle={createAboutVehicle}
        createAboutProfisson={createAboutProfisson}
        createAboutSliders={createAboutSliders}
        createAboutVideo={createAboutVideo}
        showCreateModal={showCreateModal}
        columns={columns}
        rows={headers}
        columns2={columns}
        rows2={suspensions}
        columns3={columns}
        rows3={experiences}
        columns4={columns}
        rows4={vehicles}
        columns5={columns}
        rows5={professions}
        columns6={columns}
        rows6={sliders}
        columns7={columns1}
        rows7={videos}
        onChangeAboutHome={onChangeAboutHome}
        onChangeAboutSuspention={onChangeAboutSuspention}
        onChangeAboutExperiance={onChangeAboutExperiance}
        onChangeAboutVehicle={onChangeAboutVehicle}
        onChangeAboutProfisson={onChangeAboutProfisson}
        onChangeAboutSliders={onChangeAboutSliders}
        onChangeAboutVideo={onChangeAboutVideo}
      />
    </div>
  );
}
