"use client";

import { useState } from "react";

import { Button } from "./button";

export const Torta = ({ imagen, precio, descripcion, titulo, link }) => {
  const [estado, cambiarEstado] = useState(false);

  const handleClick = () => {
    console.log("El usuario dio click", estado);
    cambiarEstado(true);
  };

  return (
    <a href={link}>
      <div className="text-center">
        <a href={link}>
          <img className="h-60 w-full object-cover" src={imagen} alt="" />
        </a>
        <h1>{titulo}</h1>
        <h4 className="text-xl font-medium mt-2 font-serif font-semibold">
          {estado === true ? descripcion : ""}
        </h4>
        <p>
          Desde <span className="fond medium">{precio}</span>
        </p>
        <Button texto="ver mas▾" variant="primary" onClick={handleClick} />
      </div>
    </a>
  );
};
