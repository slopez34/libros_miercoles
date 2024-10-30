export const LibroAdmin = () => {
  return (
    <>
      <div className="pt-4 d-flex justify-content-center">
        <div className="col-md-10">
          <table className="table table-dark">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>No.</th>
                <th style={{ width: "25%" }}>Titulo de Libros</th>
                <th style={{ width: "30%" }}>Autor</th>
                <th style={{ width: "15%" }} className="text-center">
                  ISBN
                </th>
                <th style={{ width: "15%" }}>Editorial</th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Cien años de soledad</td>
                <td>Gabriel garciaz marquez</td>
                <td className="text-center">778888888</td>
                <td>Sudamericana</td>
                <td>
                    <a href="/libact/1">
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#0000ff" }}
                  ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#0000ff" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>La casa de los espiritus</td>
                <td>Isabel allende</td>
                <td className="text-center">7888888888</td>
                <td>Rama</td>
                <td>
                    <a href="/libact/2">
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#0000ff" }}
                  ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#0000ff" }}
                  ></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>El Tunel</td>
                <td>Ernesto sabato</td>
                <td className="text-center">9856454453</td>
                <td>Planeta</td>
                <td>
                    <a href="/libact/3">
                  <i
                    className="fa-solid fa-pen-to-square"
                    style={{ color: "#0000ff" }}
                  ></i>
                  </a>
                  &nbsp;
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "#0000ff" }}
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
