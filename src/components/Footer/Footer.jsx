import React from "react";
import telegram from "../Icons/telegram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <footer>О нас</footer>
        <p>Мы лучшие в своем деле </p>
        <p>На рынке более 20 лет</p>
      </div>
      <div>
        <footer>
          <h>Контакты</h>
        </footer>
        <p>Мамед</p>
        <p>Азим</p>
        <p>Аизада</p>
        <p>Эрадил</p>
      </div>
      <div>
        <footer className="about">
          <a target="_blank" href="https://makers.kg/">
            Онлайн Чат
          </a>
        </footer>
      </div>
      <div>
        <footer>Помощь</footer>
        <a target="_blank" href="https://t.me/dosybaike">
          <img src={telegram} alt="icon" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
