import { FunctionalComponent } from "preact/src/index.d.ts";
import { telefonoApi } from "../types.ts";

export type data = {
  props: telefonoApi;
};

export const FormularioTelefono: FunctionalComponent<data> = (props) => {
    const datos = props.props
  return (
    <div>
      <h2>Introduce el telefono con prefijo</h2>
      <form method="GET" action="/">
              <input type="text" name="telefono" />
        <button type="submit">Aceptar</button>
          </form>
          {datos.is_valid ? 
              <div>
                  <p>Telefono: {datos.telefono}</p>
                  <a href={`/country/${datos.pais}`}><p>Pais: {datos.pais}</p></a>
            </div>
          :
              <div>
                  <p>El telefono no es valido</p>
            </div>
          }
    </div>
  );
};
