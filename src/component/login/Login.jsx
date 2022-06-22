import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import style from "./Login.module.css";
import { login } from "../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (isAuthenticated) {
      toast.success(t("successLogin"));
      navigate("/home", { replace: true });
    }
  }, [isAuthenticated, navigate, t]);

  // useEffect(() => {}, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    // toast.error(t("errorLogin"));

    // if (isAuthenticated) return;
    // setTimeout(() => {
    //   if (!isAuthenticated) {
    //     toast.error(t("errorLogin"));
    //   }
    // }, 4000);
  };

  console.log("isAuthenticated", isAuthenticated);
  return (
    <div className={style.wrapper}>
      <form className={style.Block} onSubmit={(e) => handleSubmit(e)}>
        <img src={logo} alt="rasm bor edi!" />
        <h1>Kirish</h1>
        <input
          type="text"
          className={style.inpu1}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          className={style.inpu2}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        <br />
        <button className={style.button}>Kirish</button>
        <br />
      </form>
    </div>
  );
};
