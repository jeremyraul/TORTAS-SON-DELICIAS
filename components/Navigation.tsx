export const Navigation = () => {
  return (
    <div className="flex justify-between items-center border-b-4 border-t-gray-400 py-400 py-5 ">
      <div>
        <a href="/contacto">Contacto</a>
        <a href="/"> Inicio </a>
      </div>
      <h2 className="text-right">Programa tu pedido</h2>
      <div className="flex gap-8">
        <div className="logo">
          <img
            src="https://cdn.icon-icons.com/icons2/614/PNG/512/phone-call-auricular-symbol-in-black_icon-icons.com_56483.png"
            width="25"
            height="25"
          ></img>
        </div>
        <a className="font-bold justify-start" href="/">
          950 444 680
        </a>
        <a href="/">m.raulsalvatierra@gmail.com</a>
        <a href="/">Iniciar secion</a>
      </div>
    </div>
  );
};
