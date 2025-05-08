import { FunctionalComponent } from "preact/src/index.d.ts";
import { ciudadApi } from "../types.ts";

export type datos = {
  props: ciudadApi;
};

export const CiudadComponent: FunctionalComponent<datos> = (props) => {
  return (
    <div>
      <p>Ciudad: {props.props.ciudad}</p>
      <a href={`/country/${props.props.pais}`}>
        <p>Pais {props.props.pais}</p>
      </a>
      <p>Temperatura: {props.props.temperatura}</p>
    </div>
  );
};
