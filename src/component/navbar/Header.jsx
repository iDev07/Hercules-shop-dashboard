import React from "react";
import { useDispatch } from "react-redux";

import Dropdown from "./dropdown/Dropdown";
import { logout } from "../../redux/actions/authAction";

import styles from "./Header.module.css";
import { useTranslation } from 'react-i18next';

export const HeaderMain = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return (
    <div className={styles.navbar}>
      <button className={styles.navbar__button} onClick={handleLogout}>{t("logOut")}</button>

      <div className={styles.navbar__userInfo}>
        <div className={styles.navbar__userInfo_userPhoto}>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
