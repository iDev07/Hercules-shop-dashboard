import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import style2 from "../../content/home/home.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { IconButton, FormControlLabel, Box } from "@mui/material";
// import { deleteAction } from "./../../redux/actions/deleteAction";
import { deleteAction } from "../../../redux/actions/deleteAction";
import { DELETE_HOME_FEEDBACKS } from "../../../redux/actions/types";
// import { uploadImage } from "../../utils/uploadImage";
import { uploadImage } from "../../../utils/uploadImage";
import { updateAction } from "../../../redux/actions/updateAction";
import { FieldHelpers } from "../../../utils/Helpers";
import { Form, Modal, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

export default function DataTable(props) {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [dataIndex, setDataIndex] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const [selectedEditID, setselectedEditID] = useState(null);
  const [eyeVisible, setEyeVisible] = useState(false);
  const [fileUrl, setfileUrl] = useState(null);
  const [fullName, setfullName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [description_uz, setDescription_uz] = useState("");
  const [description_ru, setdescription_ru] = useState("");
  const [description_en, setdescription_en] = useState("");
  const [title_uz, setTitle_uz] = useState("");
  const [title_ru, setTitle_ru] = useState("");
  const [title_en, setTitle_en] = useState("");
  const { language } = useSelector((state) => state.langReducer);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const Edit = ({ data, props }) => {
    const handleEditClick = () => {
      // shu joyda modal uchun kod yozilishi kerak
      setEditVisible(true);
      setselectedEditID(data);
      data.fullName ? setfullName(data.fullName) : <></>;
      !fileUrl && setfileUrl(data.fileUrl);
      data.companyName ? setcompanyName(data.companyName) : <></>;
      data.description_uz ? setDescription_uz(data.description_uz) : <></>;
      data.description_ru ? setdescription_ru(data.description_ru) : <></>;
      data.description_en ? setdescription_en(data.description_en) : <></>;
    };

    const editHandleOk = () => {
      form
        .validateFields()
        .then((values) => {
          form.resetFields();
          setEditVisible(false);
          fileUrl?.size
            ? uploadImage(fileUrl)
                .then((res) => {
                  dispatch(
                    updateAction(
                      props.path || props.urlName,
                      props.UPDATE_NAME,
                      selectedEditID.id,
                      {
                        ...values,
                        title_uz: data.title_uz,
                        title_en: data.title_en,
                        title_ru: data.title_ru,
                        fileUrl: res.dbPath,
                        id: selectedEditID.id,
                      }
                    )
                  );
                  toast.success(t("successEdit"));
                })
                .catch((err) => {
                  toast.error(t("errorEdit"));
                  console.log(err);
                })
            : dispatch(
                updateAction(
                  props.path || props.urlName,
                  props.UPDATE_NAME,
                  selectedEditID.id,
                  {
                    ...values,
                    title_uz: data.title_uz,
                    title_en: data.title_en,
                    title_ru: data.title_ru,
                    fileUrl: data.fileUrl,
                    id: selectedEditID.id,
                  }
                )
              );
          toast.success(t("successEdit"));
        })
        .catch((info) => {
          toast.error(t("errorEdit"));
          console.log("Validate Failed:", info);
        });
    };

    const editHandleCancel = () => {
      setEditVisible(false);
    };
    return (
      <>
        {data && (
          <Modal
            title={t("editText")}
            visible={editVisible}
            onOk={editHandleOk}
            onCancel={editHandleCancel}
            okText={t("okText")}
            cancelText={t("noText")}
          >
            <Form
              form={form}
              layout="vertical"
              name="fullName"
              initial={{
                modifier: "public",
              }}
              fields={[
                {
                  name: ["fullName"],
                  value: fullName,
                },
                {
                  name: ["companyName"],
                  value: companyName,
                },
                {
                  name: ["description_uz"],
                  value: description_uz,
                },
                {
                  name: ["description_ru"],
                  value: description_ru,
                },
                {
                  name: ["description_en"],
                  value: description_en,
                },
                {
                  name: ["fileUrl"],
                  value: fileUrl,
                },
              ]}
            >
              {data.fileUrl && (
                <>
                  <input
                    className="editFile"
                    type="file"
                    name="fileUrl"
                    title="Choose a file"
                    id="editFiles"
                    onChange={(e) => setfileUrl(e.target.files[0])}
                  />
                  <button className="editFile_btn">
                    <label htmlFor="editFiles">{t("selectBtnText")}</label>
                  </button>
                </>
              )}
              {data.fullName && (
                <FieldHelpers
                  label="Full Name"
                  name="fullName"
                  message={t("mustFullText")}
                  // message="Iltimos Full Name qatorini yo'ldiring!"
                />
              )}
              {data.companyName && (
                <FieldHelpers
                  label="company Name"
                  name="companyName"
                  message={t("mustFullText")}
                  // message="Iltimos company Name qatorini yo'ldiring!"
                />
              )}
              {data.description_uz && (
                <FieldHelpers
                  label="description Uz"
                  name="description_uz"
                  message={t("mustFullText")}
                  // message="Iltimos description Uz qatorini yo'ldiring!"
                />
              )}
              {data.description_ru && (
                <FieldHelpers
                  label="description Ru"
                  name="description_ru"
                  message={t("mustFullText")}
                  // message="Iltimos description Ru  qatorini yo'ldiring!"
                />
              )}
              {data.description_en && (
                <FieldHelpers
                  label="description En"
                  name="description_en"
                  message={t("mustFullText")}
                  // message="Iltimos description En  qatorini yo'ldiring!"
                />
              )}
              {data.siteUrl && (
                <FieldHelpers
                  label="site url"
                  name="siteUrl"
                  message={t("mustFullText")}
                  // message="Iltimos Site url qatorini yo'ldiring!"
                />
              )}
            </Form>
          </Modal>
        )}

        <FormControlLabel
          control={
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={handleEditClick}
            >
              <EditIcon style={{ color: "gold" }} />
            </IconButton>
          }
        />
      </>
    );
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(deleteAction(props.path, DELETE_HOME_FEEDBACKS, dataIndex));
    toast.success(t("successDelete"));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const Delete = ({ index }) => {
    const handleDeleteClick = () => {
      setIsModalVisible(true);
      setDataIndex(index);
    };

    return (
      <FormControlLabel
        control={
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            onClick={handleDeleteClick}
          >
            <DeleteIcon style={{ color: "red" }} />
          </IconButton>
        }
      />
    );
  };

  const Eye = ({ data, index, props }) => {
    // console.log("d", data);
    // console.log(props);
    const handleEyeClick = (props, index) => {
      const fileredData = props.rows.filter((f) => f.id === index);
      setEyeVisible(true);
      fileredData[0].fullName && setfullName(fileredData[0].fullName);
      fileredData[0].fileUrl && setfileUrl(fileredData[0].fileUrl);
      fileredData[0].companyName && setcompanyName(fileredData[0].companyName);
      fileredData[0].description_uz &&
        setDescription_uz(fileredData[0].description_uz);
      fileredData[0].description_ru &&
        setdescription_ru(fileredData[0].description_ru);
      fileredData[0].description_en &&
        setdescription_en(fileredData[0].description_en);
      fileredData[0].title_uz && setTitle_uz(fileredData[0].title_uz);
      fileredData[0].title_ru && setTitle_ru(fileredData[0].title_ru);
      fileredData[0].title_en && setTitle_en(fileredData[0].title_en);
    };

    const eyeHandleCancel = () => {
      setEyeVisible(false);
      setfileUrl(null);
      setfullName("");
      setcompanyName("");
      setDescription_uz("");
      setdescription_ru("");
      setdescription_en("");
      setTitle_uz("");
      setTitle_ru("");
      setTitle_en("");
    };
    // console.log("aaaaasssssssssssssssss", props.rows);
    // console.log("aaaaa", props.rows[index - 1].name);
    return (
      <>
        {data ? (
          <Modal
            style={{ paddingTop: "85px" }}
            visible={eyeVisible}
            onCancel={eyeHandleCancel}
            footer={null}
          >
            {fullName && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {t("homeHeaderName")}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {fullName}
                </Typography>
              </Box>
            )}
            {companyName && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {t("homeHeaderCompanyName")}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {companyName}
                </Typography>
              </Box>
            )}
            {description_en && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {t("pageHeaderNameDesc")}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 10 }}>
                  {language === "en" && description_en}
                  {language === "ru" && description_ru}
                  {language === "uz" && description_uz}
                </Typography>
              </Box>
            )}
            {title_en && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {t("pageHeaderNameTitle")}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {language === "en" && title_en}
                  {language === "ru" && title_ru}
                  {language === "uz" && title_uz}
                </Typography>
              </Box>
            )}
            {data.siteUrl && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {t("pageHeaderNameSiteUrl")}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {data.siteUrl}
                </Typography>
              </Box>
            )}
            {fileUrl && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {t("pageHeaderUrl")}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {fileUrl?.includes("http") ? (
                    <img
                      className="tableModalImg"
                      src={fileUrl}
                      alt={fileUrl}
                    />
                  ) : (
                    <img
                      className="tableModalImg"
                      src={`https://api.mservis.softcity.uz/${fileUrl}`}
                      alt={fileUrl}
                    />
                  )}
                </Typography>
              </Box>
            )}
            {props?.rows[index - 1]?.name && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Name
                  {/* {t("pageName")} */}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {props?.rows[index - 1]?.name}
                </Typography>
              </Box>
            )}
            {props?.rows[index - 1]?.surname && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Surname
                  {/* {t("pageSurname")} */}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {props?.rows[index - 1]?.surname}
                </Typography>
              </Box>
            )}
            {props?.rows[index - 1]?.email && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Email
                  {/* {t("pageEmail")} */}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {props?.rows[index - 1]?.email}
                </Typography>
              </Box>
            )}
            {props?.rows[index - 1]?.phone && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Phone
                  {/* {t("pagePhone")} */}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {props?.rows[index - 1]?.phone}
                </Typography>
              </Box>
            )}
            {props?.rows[index - 1]?.message && (
              <Box sx={{ paddingTop: "35px" }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Message
                  {/* {t("pageMessage")} */}
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  style={{ paddingBottom: "40px" }}
                >
                  {props?.rows[index - 1]?.message}
                </Typography>
              </Box>
            )}
          </Modal>
        ) : (
          <></>
        )}

        <FormControlLabel
          control={
            <IconButton
              color="secondary"
              aria-label="add an alarm"
              onClick={() => handleEyeClick(props, index)}
            >
              <VisibilityIcon style={{ color: "green" }} />
            </IconButton>
          }
        />
      </>
    );
  };

  const copiedColumns = [
    ...props.columns,
    {
      field: "action",
      headerName: t("pageHeaderName"),
      sortable: false,
      // width: "100wv",
      width: 150,
      renderCell: (params) => (
        <>
          <Eye data={params.row} props={props} index={params.row.id} />
          <Edit data={params.row} props={props} />
          <Delete index={params.row.id} />
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.id}
          rows={props.rows}
          columns={copiedColumns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          checkboxSelection
          className={style2.Table}
          justifyContent="center"
          alignItems="center"
        ></DataGrid>
      </div>
      <>
        <Modal
          title=" "
          visible={isModalVisible}
          onOk={handleOk}
          onOkText={"Ha"}
          onCancelText={"Bekor qilish"}
          onCancel={handleCancel}
        >
          <h1>{t("deleteText")}</h1>
        </Modal>
      </>
    </>
  );
}
