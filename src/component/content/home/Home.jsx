import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GET_HOME_FEEDBACK,
  GET_HOME_INFO_Details,
  GET_HOME_LOCATION,
  GET_HOME_PARTNERS,
  GET_HOME_SLIDER,
  GET_HOME_STEP,
  GET_HOME_STEP_COTEGORY,
  GET_HOME_TOLS,
} from "../../../redux/actions/types";
import { CategoryCopy } from "../../helpers/CategoryCopy";
import { getAction } from "../../../redux/actions/readAction";
import { Form } from "antd";
import { HomeCollums } from "./HomeCollums";
import { OnChange } from "../../helpers/OnChange";
import { CreateCategory } from "../../helpers/CreateCategory";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [fileUrl, setfileUrl] = useState(null);
  const [form] = Form.useForm();
  const [createVisible, setCreateVisible] = useState(false);
  const {
    feedback,
    details,
    location,
    partners,
    slider,
    step,
    stepCotegory,
    tools,
  } = useSelector((state) => state.home_reducer);

  const limits = [{ tab: "7", max: 4 }];

  useEffect(() => {
    dispatch(getAction("homeFeedbacks", GET_HOME_FEEDBACK));
    dispatch(getAction("homeInfoDetails", GET_HOME_INFO_Details));
    dispatch(getAction("homeLocations", GET_HOME_LOCATION));
    dispatch(getAction("homePartners", GET_HOME_PARTNERS));
    dispatch(getAction("homeSliders", GET_HOME_SLIDER));
    dispatch(getAction("homeSteps", GET_HOME_STEP));
    dispatch(getAction("homeStepCategories", GET_HOME_STEP_COTEGORY));
    dispatch(getAction("homeTools", GET_HOME_TOLS));
  }, [dispatch]);
  const map = [
    { id: "1", id2: "Feedback", label: t("homeLabel1") },
    { id: "2", id2: "HOMEDetails", label: t("homeLabel2") },
    { id: "3", id2: "HOMELocation", label: t("homeLabel3") },
    { id: "4", id2: "HomePartner", label: t("homeLabel4") },
    { id: "5", id2: "HomeSlider", label: t("homeLabel5") },
    { id: "6", id2: "HomeStep", label: t("homeLabel6") },
    { id: "7", id2: "HomeStepCategory", label: t("homeLabel7") },
    { id: "8", label: t("homeLabel8") },
  ];
  const {
    onChangeFeedbacks,
    onChangeDetails,
    onChangeLocation,
    onChangePartner,
    onChangeSlider,
    onChangeStep,
    onChangeStepCategory,
    onChangeTools,
  } = OnChange(setfileUrl);
  const showCreateModal = () => {
    setCreateVisible(true);
  };
  const {
    createFeedbacks,
    createSlider,
    createSliderCotegory,
    createDetails,
    createLocation,
    createTols,
    createPortner,
    createStep,
    createHandleCancel,
  } = CreateCategory(setCreateVisible, form, fileUrl, dispatch);

  const { columns, columns2, columns4, columns7 } = HomeCollums();

  return (
    <div>
      <CategoryCopy
        createVisible={createVisible}
        createFeedbacks={createFeedbacks}
        createSlider={createSlider}
        createSliderCotegory={createSliderCotegory}
        createDetails={createDetails}
        createLocation={createLocation}
        createTols={createTols}
        createPortner={createPortner}
        createStep={createStep}
        createHandleCancel={createHandleCancel}
        form={form}
        columns={columns}
        rows={feedback}
        columns2={columns2}
        rows2={details}
        columns3={columns2}
        rows3={location}
        columns4={columns4}
        rows4={partners}
        columns5={columns2}
        rows5={slider}
        columns6={columns2}
        rows6={step}
        columns7={columns7}
        rows7={stepCotegory}
        columns8={columns2}
        rows8={tools}
        title={t("homeTitle")}
        map={map}
        showCreateModal={showCreateModal}
        onChangeFeedbacks={onChangeFeedbacks}
        onChangeDetails={onChangeDetails}
        onChangeLocation={onChangeLocation}
        onChangePartner={onChangePartner}
        onChangeSlider={onChangeSlider}
        onChangeStep={onChangeStep}
        onChangeStepCategory={onChangeStepCategory}
        onChangeTools={onChangeTools}
        limits={limits}
      />
    </div>
  );
}
