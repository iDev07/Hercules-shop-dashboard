import {
  CREATE_HOME_FEEDBACKS,
  CREATE_HOME_DETAILS,
  CREATE_HOME_LOCATION,
  CREATE_HOME_PARTNERS,
  CREATE_HOME_SLIDER,
  CREATE_HOME_STEP,
  CREATE_HOME_STEP_COTEGORY,
  CREATE_HOME_TOOLS,
  CREATE_ABOUT_HEADER,
  CREATE_ABOUT_SUSPENSIONS,
  CREATE_ABOUT_EXPERIENCES,
  CREATE_ABOUT_VEHICLES,
  CREATE_ABOUT_PROFESSIONS,
  CREATE_ABOUT_SLIDERS,
  CREATE_ABOUT_VIDEO,
  CREATE_SERVICE_HOME,
  CREATE_SERVICE_AUTO_REPAIRS,
  CREATE_SERVICE_REPAIRS,
  CREATE_NEWS_HEADER,
  CREATE_NEWS_CATEGORY,
  CREATE_NEWS_MAIN,
  CREATE_NEWS_SLIDERS,
  CREATE_CONTACT_HEADER,
  CREATE_CONTACT_INFO,
  CREATE_SITE_MASTER,
} from "../../redux/actions/types";
import { createAction } from "../../redux/actions/createAction";
import { uploadImage } from "../../utils/uploadImage";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export function CreateHomeFeedbacks(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("homeFeedbacksAPI", CREATE_HOME_FEEDBACKS, {
              fullName: values?.fullName,
              companyName: values?.companyName,
              description_uz: values?.description_uz,
              description_ru: values?.description_ru,
              description_en: values?.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateHomeDetails(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("homeInfoDetailsAPI", CREATE_HOME_DETAILS, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateHomeLocation(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("homeLocationsAPI", CREATE_HOME_LOCATION, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateHomePartner(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("homePartnersAPI", CREATE_HOME_PARTNERS, {
              siteUrl: values.siteUrl,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateHomeSlider(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("homeSlidersAPI", CREATE_HOME_SLIDER, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateHomeStep(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("homeStepsAPI", CREATE_HOME_STEP, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateHomeTools(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("homeToolsAPI", CREATE_HOME_TOOLS, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateSliderCotegory(form, setCreateVisible, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        dispatch(
          createAction("homeStepCategoriesAPI", CREATE_HOME_STEP_COTEGORY, {
            title_uz: values.title_uz,
            title_ru: values.title_ru,
            title_en: values.title_en,
            description_uz: values.description_uz,
            description_ru: values.description_ru,
            description_en: values.description_en,
          })
        );

        toast.success(t("successCreate"));
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };
}
//About
export function CreateAboutHome(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("aboutHeadersAPI", CREATE_ABOUT_HEADER, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateAboutSuspention(
  form,
  setCreateVisible,
  fileUrl,
  dispatch
) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("aboutIndoSuspensionsAPI", CREATE_ABOUT_SUSPENSIONS, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateAboutExperiance(
  form,
  setCreateVisible,
  fileUrl,
  dispatch
) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("aboutInfoExperiencesAPI", CREATE_ABOUT_EXPERIENCES, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateAboutVehicle(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("aboutInfoVehiclesAPI", CREATE_ABOUT_VEHICLES, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateAboutProfisson(
  form,
  setCreateVisible,
  fileUrl,
  dispatch
) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("aboutProfessionsAPI", CREATE_ABOUT_PROFESSIONS, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateAboutSliders(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("aboutSlidersAPI", CREATE_ABOUT_SLIDERS, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateAboutVideo(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("aboutVideosAPI", CREATE_ABOUT_VIDEO, {
              name_uz: values.name_uz,
              name_en: values.name_en,
              name_ru: values.name_ru,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}

//service
export function CreateServiceHeader(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("serviceHeadersAPI", CREATE_SERVICE_HOME, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateserviceAutoRepairs(
  form,
  setCreateVisible,
  fileUrl,
  dispatch
) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("serviceAutoRepairsAPI", CREATE_SERVICE_AUTO_REPAIRS, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              status: values.status,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}

export function CreateserviceRepairs(
  form,
  setCreateVisible,
  fileUrl,
  dispatch
) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("serviceRepairsAPI", CREATE_SERVICE_REPAIRS, {
              short_description_uz: values.short_description_uz,
              short_description_ru: values.short_description_ru,
              short_description_en: values.short_description_en,
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}

//news
export function CreateNewsHome(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("newsHeadersAPI", CREATE_NEWS_HEADER, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateNewsCategory(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("newsCategoriesAPI", CREATE_NEWS_CATEGORY, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              status: values.status,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateNewsMain(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("newsMainsAPI", CREATE_NEWS_MAIN, {
              short_description_uz: values.short_description_uz,
              short_description_ru: values.short_description_ru,
              short_description_en: values.short_description_en,
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateNewsSlider(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("newsSlidersAPI", CREATE_NEWS_SLIDERS, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}

//contact
export function CreateContactHeader(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("contactHeadersAPI", CREATE_CONTACT_HEADER, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              fileUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
export function CreateContactInfo(form, setCreateVisible, fileUrl, dispatch) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("contactInfoesAPI", CREATE_CONTACT_INFO, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              latutide: values.latutide,
              longitude: values.longitude,
              locationUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}

//site
export function CreatesitemasterPageInfoes(
  form,
  setCreateVisible,
  fileUrl,
  dispatch
) {
  const { t } = useTranslation();
  return () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setCreateVisible(false);
        uploadImage(fileUrl).then((res) => {
          dispatch(
            createAction("sitemasterPageInfoesAPI", CREATE_SITE_MASTER, {
              title_uz: values.title_uz,
              title_ru: values.title_ru,
              title_en: values.title_en,
              description_uz: values.description_uz,
              description_ru: values.description_ru,
              description_en: values.description_en,
              facebookUrl: values.facebookUrl,
              instagramUrl: values.instagramUrl,
              tvitterUrl: values.tvitterUrl,
              serviceText: values.serviceText,
              aboutText: values.aboutText,
              contactText: values.contactText,
              logoUrl: res.dbPath,
            })
          );
        });
        toast.success(t("successCreate"));
      })
      .catch((err) => {
        toast.error(t("errorCreate"));
        console.log(err);
      });
  };
}
