import React from "react";
import TextsmsIcon from "@mui/icons-material/Textsms";

const Footer = () => {
  return (
    <div className="bg-black w-[100%] pb-[1.29vw] flex justify-center items-center">
      <div className="w-[40%] pt-[2.29vw] flex justify-center items-center text-center flex-col">
        <h2 className="text-nav font-Gilroy text-[2.5vw] font-[900] pb-[0.83vw] cursor-pointer">
          <span className="text-white font-Gilroy text-[1.66vw] font-[900]">
            8(495)
          </span>{" "}
          106-52-16
        </h2>
        <h5 className="text-nav font-Gilroy text-[0.99vw] font-[400] flex gap-[10px] items-center pb-[0.83vw]">
          <TextsmsIcon className="text-white" />
          <a href="https://www.mrbyt.ru/">
          order@mrappiliance.ru 
          </a>
        </h5>
        <h5 className="text-white font-Gilroy text-[0.97vw] font-normal pb-[0.83vw]">
          ИНН 2003922 / ОГРН 21002494911
        </h5>
        <h5 className="text-nav font-Gilroy text-[0.99vw] font-[400] flex gap-[10px] items-center pb-[0.83vw]">
          Политика конфиденциальности и обработки персональных данных.
        </h5>
        <h5 className="text-white font-Gilroy text-[0.97vw] font-normal pb-[0.83vw]">
          2021 © Мистер Быт
        </h5>
        <p className="text-[#EDF3F6] font-Gilroy text-[0.62vw] font-normal">
          Представленная на сайте информация, касающаяся сроков, стоимости и
          порядка предоставления услуг, носит информационный характер и ни при
          каких условиях не является публичной офертой, определяемой положениями
          Статьи 437(2) Гражданского кодекса РФ.
        </p>
      </div>
    </div>
  );
};

export default Footer;
