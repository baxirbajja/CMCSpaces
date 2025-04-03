import React from "react";
import { Button } from "./Button";
import capturaDePantalla20241108111054 from "./captura-de-pantalla-2024-11-08-111054.png";
import capturaDePantalla20241108111102 from "./captura-de-pantalla-2024-11-08-111102.png";
import group6661 from "./group-666-1.svg";
import image3 from "./image-3.png";
import rectangle16631 from "./rectangle-1663-1.png";
import rectangle16632 from "./rectangle-1663-2.png";
import "./style.css";
import vector11 from "./vector-1-1.svg";
import vector21 from "./vector-2-1.svg";

export const Home = () => {
  return (
    <div className="home">
      <div className="div">
        <div className="text-wrapper">ESPACES</div>

        <div className="text-wrapper-2">ACCEUIL</div>

        <div className="overlap-group">
          <div className="text-wrapper-3">CONTACT</div>

          <div className="text-wrapper-4">CMC</div>
        </div>

        <p className="ESPACES-CMC">
          <span className="span">
            ESPACES CMC
            <br />
          </span>

          <span className="text-wrapper-5">
            RESERVATION
            <br />
          </span>
        </p>

        <div className="overlap">
          <p className="p">+62 485 78 48 52</p>

          <img className="vector" alt="Vector" src={vector21} />
        </div>

        <img className="group" alt="Group" src={group6661} />

        <img className="img" alt="Vector" src={vector11} />

        <img className="rectangle" alt="Rectangle" src={rectangle16631} />

        <img className="rectangle-2" alt="Rectangle" src={rectangle16632} />

        <img
          className="captura-de-pantalla"
          alt="Captura de pantalla"
          src={capturaDePantalla20241108111054}
        />

        <img
          className="captura-de-pantalla-2"
          alt="Captura de pantalla"
          src={capturaDePantalla20241108111102}
        />

        <img className="image" alt="Image" src={image3} />

        <Button
          className="button-instance"
          labelText="Explorer nos Espaces"
          labelTextClassName="design-component-instance-node"
          showIcon={false}
          style="filled"
        />
        <Button
          className="button-2"
          labelText="Reserver&nbsp;&nbsp;Espace"
          labelTextClassName="button-3"
          showIcon={false}
          style="filled"
        />
      </div>
    </div>
  );
};
