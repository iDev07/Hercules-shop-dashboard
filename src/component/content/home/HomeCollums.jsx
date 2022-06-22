import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

export function HomeCollums() {
  const { t } = useTranslation();
  const { language } = useSelector((state) => state.langReducer);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "fullName", headerName: t("homeHeaderName"), width: 135 },
    {
      field: "companyName",
      headerName: t("homeHeaderCompanyName"),
      width: 135,
    },
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
      width: 135,
    },
    {
      field: "fileUrl",
      headerName: t("pageHeaderUrl"),
      width: 135,
      renderCell: (params) => {
        return !params?.value?.includes("http") ? (
          <img src={"https://api.mservis.softcity.uz/" + params.value} alt="" />
        ) : (
          <img src={params.value} alt="" />
        );
      },
    },
  ];
  const columns2 = [
    {
      field: "id",
      headerName: "ID",
      width:
        window.innerWidth >= 1920
          ? 70
          : window.innerWidth >= 1450
          ? 50
          : window.innerWidth >= 1366
          ? 30
          : 20,
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
      width:
        window.innerWidth >= 1920
          ? 250
          : window.innerWidth >= 1450
          ? 160
          : window.innerWidth >= 1366
          ? 150
          : 100,
    },
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
      width:
        window.innerWidth >= 1920
          ? 710
          : window.innerWidth >= 1450
          ? 450
          : window.innerWidth >= 1366
          ? 350
          : 280,
    },
    {
      field: "fileUrl",
      headerName: t("pageHeaderUrl"),
      width:
        window.innerWidth >= 1920
          ? 250
          : window.innerWidth >= 1450
          ? 170
          : window.innerWidth >= 1366
          ? 150
          : 100,
      renderCell: (params) => {
        return !params?.value?.includes("http") ? (
          <img src={"https://api.mservis.softcity.uz/" + params.value} alt="" />
        ) : (
          <img src={params.value} alt="" />
        );
      },
    },
  ];
  const columns4 = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "siteUrl",
      headerName: t("pageHeaderNameSiteUrl"),
      width: 225,
    },
    {
      field: "fileUrl",
      headerName: t("pageHeaderUrl"),
      width: 225,
      renderCell: (params) => {
        return !params?.value?.includes("http") ? (
          <img src={"https://api.mservis.softcity.uz/" + params.value} alt="" />
        ) : (
          <img src={params.value} alt="" />
        );
      },
    },
  ];
  const columns7 = [
    { field: "id", headerName: "ID", width: 70 },
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
      width: 230,
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
      width: 230,
    },
  ];
  return { columns, columns2, columns4, columns7 };
}
