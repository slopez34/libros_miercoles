import { useState } from "react";

import { Libro } from "../../modelos/Libro";
import { ARREGLO_LIBROS } from "../../mocks/Libro-mocks";
import { ARREGLO_LIBRO_GENERO } from "../../utilidades/Dominios/DomGenero";

export const LibroListar = ()=>{
  const [arrLibros] = useState<Libro[]>(ARREGLO_LIBROS);

  const obtenerNombre = (valor: String)=>{
    for (const objGen of ARREGLO_LIBRO_GENERO){
      if( objGen.codGenero == valor) {
        return objGen.nombreGenero;
      }
    }

  }


  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-dark">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Codigo</th>
                <th style={{ width: "35%" }}>Titulo de Libros</th>
                <th style={{ width: "30%" }}>Autor</th>
                <th style={{ width: "15%" }} className="text-center">
                  Genero
                </th>
                <th style={{ width: "15%" }}>imagen</th>
              </tr>
            </thead>
            <tbody>

              {arrLibros.map((miLi: Libro)=>(
                <tr key={miLi.codLibro} className="align-middle">
                <td>{miLi.codLibro}</td>
                <td>{miLi.tituloLibro}</td>
                <td>{miLi.autorLibro}</td>
                <td className="text-center">{obtenerNombre(miLi.codGeneroLibro)}</td>
                <td>
                  <img src={miLi.imagenLibroBase64} alt="La imagen" className="imagenListado" />
                  <br/>
                  {miLi.imagenLibro}
                  </td>
              </tr>

              ))}
            
           
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
