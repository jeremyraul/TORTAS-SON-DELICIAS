"use client";

import { Torta } from "@/components/Torta";
import { Navigation } from "../components/Navigation";
import { Button } from "@/components/button";
const Home = () => {
  return (
    <div className="max-w-[1000px] mx-auto mt-5">
      <div>
        <Navigation />
      </div>

      <h1 className="text-2xl text-center font-serif text-yellow-500 mb-7">
        TORTAS SON DELICIAS
      </h1>
      <div className="max-w-[350px] mx-auto text-slate-400 mb-14">
        <p className="text-center">
          Las preferidas por nuestros clientes, encuéntralas en sus diferentes
          tamaños y sabores
        </p>
      </div>

      <a
        className="bg-stone-400 border-solid"
        href="/novia"
        imagen="/torta2.jpg"
      >
        Ver más▾
      </a>
      <Torta
        link={"/novia"}
        imagen={"/torta2.jpg"}
        precio={180}
        titulo={"Novia"}
        descripcion={"Sabor a vainilla con pecanas, pasas y mani"}
      ></Torta>

      <Torta
        link={"/torta"}
        imagen={"/torta1.jpg"}
        precio={100}
        descripcion={"torta"}
      />
      <Torta
        imagen={"/torta3.jpg"}
        precio={200}
        descripcion={"sabor a vainilla"}
      />
      <Torta imagen={"/torta4.jpg"} precio={40} descripcion={"rico"} />

      <Button texto="ver más▾" variant="primary"></Button>
      <Button texto="ver más▾" variant="secondary"></Button>
    </div>
  );
};
//cd tortas,ls,npm run dev.
export default Home;
