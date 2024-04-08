import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ButtonIcon from "./ButtonIcon";
import { MdOutlineLanguage } from "react-icons/md";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("en");

  function handleChangeLanguage() {
    if (lang === "vn") setLang("en");
    else setLang("vn");

    i18n.changeLanguage(lang);
  }

  return (
    <ButtonIcon>
      <MdOutlineLanguage onClick={handleChangeLanguage} />
    </ButtonIcon>
  );
};

export default LanguageSelector;
