import * as React from "react";
import { Form, Modal } from "antd";
import { FieldHelpers } from "../../utils/Helpers";
import { useSelector } from "react-redux";
// import { style } from "@mui/system";
import style from "./CategoryDatas.module.css";

export function CategoryDatas(props) {
  const { language } = useSelector((state) => state.langReducer);

  const datatable = [
    {
      id: 1,
      onclick: props.createFeedbacks,
      name1: "fullName",
      value1: "AntDesign",
      name2: "companyName",
      value2: "AntDesign",
      description:
        language === "uz"
          ? "description_uz"
          : language === "en"
          ? "description_en"
          : language === "ru"
          ? "description_ru"
          : "",
      value3: "AntDesign",
      description_uz: "description_uz",
      description_en: "description_en",
      description_ru: "description_ru",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeFeedbacks,
    },
    {
      id: 2,
      onclick: props.createDetails,
      title:
        language === "uz"
          ? "title_uz"
          : language === "en"
          ? "title_en"
          : language === "ru"
          ? "title_ru"
          : "",
      valuetitle: "AntDesign",
      title_uz: "title_uz",
      title_en: "title_en",
      title_ru: "title_ru",
      description:
        language === "uz"
          ? "description_uz"
          : language === "en"
          ? "description_en"
          : language === "ru"
          ? "description_ru"
          : "",
      valuedescription: "AntDesign",
      description_uz: "description_uz",
      description_en: "description_en",
      description_ru: "description_ru",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeDetails,
    },
    {
      id: 3,
      onclick: props.createLocation,
      title:
        language === "uz"
          ? "title_uz"
          : language === "en"
          ? "title_en"
          : language === "ru"
          ? "title_ru"
          : "",
      valuetitle: "AntDesign",
      title_uz: "title_uz",
      title_en: "title_en",
      title_ru: "title_ru",
      description:
        language === "uz"
          ? "description_uz"
          : language === "en"
          ? "description_en"
          : language === "ru"
          ? "description_ru"
          : "",
      valuedescription: "AntDesign",
      description_uz: "description_uz",
      description_en: "description_en",
      description_ru: "description_ru",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeLocation,
    },
    {
      id: 4,
      onclick: props.createPortner,
      name1: "siteUrl",
      value1: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangePartner,
    },
    {
      id: 6,
      onclick: props.createSlider,
      title:
        language === "uz"
          ? "title_uz"
          : language === "en"
          ? "title_en"
          : language === "ru"
          ? "title_ru"
          : "",
      valuetitle: "AntDesign",
      title_uz: "title_uz",
      title_en: "title_en",
      title_ru: "title_ru",
      description:
        language === "uz"
          ? "description_uz"
          : language === "en"
          ? "description_en"
          : language === "ru"
          ? "description_ru"
          : "",
      valuedescription: "AntDesign",
      description_uz: "description_uz",
      description_en: "description_en",
      description_ru: "description_ru",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeSlider,
    },
    {
      id: 5,
      onclick: props.createStep,
      title:
        language === "uz"
          ? "title_uz"
          : language === "en"
          ? "title_en"
          : language === "ru"
          ? "title_ru"
          : "",
      valuetitle: "AntDesign",
      title_uz: "title_uz",
      title_en: "title_en",
      title_ru: "title_ru",
      description:
        language === "uz"
          ? "description_uz"
          : language === "en"
          ? "description_en"
          : language === "ru"
          ? "description_ru"
          : "",
      valuedescription: "AntDesign",
      description_uz: "description_uz",
      description_en: "description_en",
      description_ru: "description_ru",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeStep,
    },
    {
      id: 7,
      onclick: props.createSliderCotegory,
      title:
        language === "uz"
          ? "title_uz"
          : language === "en"
          ? "title_en"
          : language === "ru"
          ? "title_ru"
          : "",
      valuetitle: "AntDesign",
      title_uz: "title_uz",
      title_en: "title_en",
      title_ru: "title_ru",
      description:
        language === "uz"
          ? "description_uz"
          : language === "en"
          ? "description_en"
          : language === "ru"
          ? "description_ru"
          : "",
      valuedescription: "AntDesign",
      description_uz: "description_uz",
      description_en: "description_en",
      description_ru: "description_ru",
      onChange: props.onChangeStepCategory,
    },
    {
      id: 8,
      onclick: props.createTols,
      title:
        language === "uz"
          ? "title_uz"
          : language === "en"
          ? "title_en"
          : language === "ru"
          ? "title_ru"
          : "",
      valuetitle: "AntDesign",
      title_uz: "title_uz",
      title_en: "title_en",
      title_ru: "title_ru",
      description:
        language === "uz"
          ? "description_uz"
          : language === "en"
          ? "description_en"
          : language === "ru"
          ? "description_ru"
          : "",
      valuedescription: "AntDesign",
      description_uz: "description_uz",
      description_en: "description_en",
      description_ru: "description_ru",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeTools,
    },
    {
      id: 9,
      onclick: props.CreateAboutHeader,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeAboutHome,
    },
    {
      id: 10,
      onclick: props.createAboutSuspention,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeAboutHome,
    },
    {
      id: 11,
      onclick: props.createAboutExperiance,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeAboutExperiance,
    },
    {
      id: 12,
      onclick: props.createAboutVehicle,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeAboutVehicle,
    },
    {
      id: 13,
      onclick: props.createAboutProfisson,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeAboutProfisson,
    },
    {
      id: 14,
      onclick: props.createAboutSliders,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeAboutSliders,
    },
    {
      id: 15,
      onclick: props.createAboutVideo,
      description: "description_uz",
      value1: "AntDesign",
      name2: "name_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeAboutVideo,
    },
    {
      id: 16,
      onclick: props.CreateServiceHeader,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeService,
    },
    {
      id: 17,
      onclick: props.createserviceAutoRepairs,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeServiceAutoRepairs,
    },
    {
      id: 18,
      onclick: props.createserviceRepairs,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name3: "short_description_uz",
      value3: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeServiceRepairs,
    },
    {
      id: 19,
      onclick: props.createNewsHeader,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangenewsHeaders,
    },
    {
      id: 20,
      onclick: props.createNewsCategory,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name3: "status",
      value3: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangenewsCategory,
    },
    {
      id: 21,
      onclick: props.createNewsMains,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name3: "short_description_uz",
      value3: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeonNewsMains,
    },
    {
      id: 22,
      onclick: props.createnewsSliders,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangeonNewsSlider,
    },
    {
      id: 23,
      onclick: props.createContactHeader,
      description: "description_uz",
      value1: "AntDesign",
      name2: "title_uz",
      value2: "AntDesign",
      name4: "fileUrl",
      value4: null,
      onChange: props.onChangContactHeader,
    },
    {
      id: 24,
      onclick: props.createContactInfo,
      description: "description_uz",
      value1: "",
      name2: "title_uz",
      value2: "",
      name3: "longitude",
      value3: "",
      name4: "locationUrl",
      value4: null,
      name5: "latutide",
      value5: "",
      onChange: props.onChangContactInfo,
    },
    {
      id: 25,
      onclick: props.createsitemasterPageInfoes,
      description: "description_uz",
      value1: "",
      name2: "title_uz",
      value2: "",
      name3: "facebookUrl",
      value3: "",
      name4: "logoUrl",
      value4: null,
      name5: "instagramUrl",
      value5: "",
      name6: "tvitterUrl",
      value6: "",
      name7: "serviceText",
      value7: "",
      name8: "aboutText",
      value8: "",
      name9: "contactText",
      value9: "",
      onChange: props.onChangesitemasterPageInfoes,
    },
  ];
  const datatablemap = datatable.map((a) => (
    <Modal
      key={a.id}
      title={" "}
      visible={props.createVisible}
      onOk={a.onclick}
      onCancel={props.createHandleCancel}
      okText={"yaratish"}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{
        style: {
          background: "#593C7D",
          borderRadius: "5px",
          borderColor: "#593C7D",
          width: "200px",
          height: "45px",
          marginBottom: "1rem",
        },
      }}
      htmlType="submit"
    >
      <Form
        form={props.form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: "public",
        }}
        fields={[
          {
            name: a.title,
            value: a.valuetitle,
          },
          {
            name: a.description,
            value: a.valuedescription,
          },
          {
            name: a.name1,
            value: a.value1,
          },
          {
            name: a.name2,
            value: a.value2,
          },
          {
            name: a.name3,
            value: a.value3,
          },
          {
            name: a.name4,
            value: a.value4,
          },
          {
            name: a.name5,
            value: a.value5,
          },
          {
            name: a.name6,
            value: a.value6,
          },
          {
            name: a.name7,
            value: a.value7,
          },
          {
            name: a.name8,
            value: a.value8,
          },
          {
            name: a.name9,
            value: a.value9,
          },
          {
            name: a.name9,
            value: a.value9,
          },
        ]}
      >
        {a.name1 ? (
          <FieldHelpers
            label={a.name1}
            name={a.name1}
            message={`Iltimos ${a.name1} qatorini toldiring!`}
          />
        ) : (
          <></>
        )}
        {a.name2 ? (
          <FieldHelpers
            label={a.name2}
            name={a.name2}
            message={`Iltimos ${a.name2} qatorini toldiring!`}
          />
        ) : (
          <></>
        )}
        {a.name3 ? (
          <FieldHelpers
            label={a.name3}
            name={a.name3}
            message={`Iltimos ${a.name3} qatorini toldiring!`}
          />
        ) : (
          <></>
        )}
        {a.name5 ? (
          <FieldHelpers
            label={a.name5}
            name={a.name5}
            message={`Iltimos ${a.name5} qatorini toldiring!`}
          />
        ) : (
          <></>
        )}
        {a.name6 ? (
          <FieldHelpers
            label={a.name6}
            name={a.name6}
            message={`Iltimos ${a.name6} qatorini toldiring!`}
          />
        ) : (
          <></>
        )}
        {a.name7 ? (
          <FieldHelpers
            label={a.name7}
            name={a.name7}
            message={`Iltimos ${a.name7} qatorini toldiring!`}
          />
        ) : (
          <></>
        )}
        {a.name8 ? (
          <FieldHelpers
            label={a.name8}
            name={a.name8}
            message={`Iltimos ${a.name8} qatorini toldiring!`}
          />
        ) : (
          <></>
        )}
        {a.name9 ? (
          <FieldHelpers
            label={a.name9}
            name={a.name9}
            message={`Iltimos ${a.name9} qatorini toldiring!`}
          />
        ) : (
          <></>
        )}
        {/* {a.description ? (
          <>
            <FieldHelpers
              label={a.description_uz}
              name={a.description_uz}
              message={`Iltimos ${a.description_uz} qatorini toldiring!`}
            />
            <FieldHelpers
              label={a.description_en}
              name={a.description_en}
              message={`Iltimos ${a.description_en} qatorini toldiring!`}
            />
            <FieldHelpers
              label={a.description_ru}
              name={a.description_ru}
              message={`Iltimos ${a.description_ru} qatorini toldiring!`}
            />
          </>
        ) : (
          <></>
        )}
        {a.title ? (
          <>
            <FieldHelpers
              label={a.title_uz}
              name={a.title_uz}
              message={`Iltimos ${a.title_uz} qatorini toldiring!`}
            />
            <FieldHelpers
              label={a.title_en}
              name={a.title_en}
              message={`Iltimos ${a.title_en} qatorini toldiring!`}
            />
            <FieldHelpers
              label={a.title_ru}
              name={a.title_ru}
              message={`Iltimos ${a.title_ru} qatorini toldiring!`}
            />
          </> */}
        {a.name4 ? (
          <input
            className={style.load_picture}
            type="file"
            name="fileUrl"
            onChange={a.onChange}
          />
        ) : (
          <></>
        )}
      </Form>
    </Modal>
  ));
  return datatablemap;
}
