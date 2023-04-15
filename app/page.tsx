export default function Home() {
  return (
    <div className="max-w-[1000px] mx-auto mt-5" >
      <h1 className="text-2xl font-bold text-red-600">TORTAS SON DELICIAS</h1>
      <p>Somos una compañia con el objetivo de endulzar el día a día de nuestros clientes, con las variadas delicias que ofrecemos mediante el cariño que nos caracteriza.</p>
      <h2>PRODUCTOS</h2>
  
      <div className="grid grid-cols-4 gap-10">
        <div>
          <img className="h-60" src="/torta2.jpg" alt="" />    
          <h3 className="text-xl mt-2">TORTA DE MATRIMONIO AL DESNUDO 3KG</h3>
          <p>Precio por unidad a solo s/200. Exquisito producto, a base de keke combinado de vainilla con chocolate. Con excelente manjar en los rellenos y con rosas naturales.</p>
        </div>

        <div>
          <img className="h-60"src="/torta1.jpg"alt="" />
          <h4 className="text-xl">TORTA DE COSTURERA</h4>
          <p>Lindo producto </p>
        </div>
        

        <div>
          <img className="h-60" src="/torta3.jpg" alt="" />
          <h5 className="text-xl">TORTA DE DOCTORA</h5>
          <p>Hermosa torta</p>
        </div>

        <div>
          <img className="h-60" src="torta4.jpg" alt="" />
          <h6 className="text-xl mt-2">TORTA DE LA PRINCESA SOFIA</h6>
          <p>torta para niñas.</p>
        </div>
      </div>
    </div>
  )
}