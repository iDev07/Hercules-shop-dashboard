import React, { useState } from "react";
import style2 from "../content/home/home.module.css";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { BootstrapInput } from "../content/home/BootstrapInput";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

export default function CustomizedSelects(props) {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
    dispatch({ type: "LANG_CHANGED", payload: event.target.value });
  };

  return (
    <div className={style2.CustomizedSelects}>
      <FormControl sx={{ m: 1 }} variant="standard">
        <Select
          value={lang}
          onChange={handleChange}
          className={style2.Select}
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          input={<BootstrapInput />}
          displayEmpty
        >
          <MenuItem value="uz" className={style2.MenuItem}>
            Uzbek
          </MenuItem>
          <MenuItem value="ru" className={style2.MenuItem}>
            Russian
          </MenuItem>
          <MenuItem value="en" className={style2.MenuItem}>
            English
          </MenuItem>
        </Select>
      </FormControl>
      {props.isLimited ? null : (
        <Button
          onClick={props.showCreateModal}
          className={style2.Button}
          variant="outlined"
          startIcon={<AddIcon />}
        >
          {t("create")}
        </Button>
      )}
    </div>
  );
}
