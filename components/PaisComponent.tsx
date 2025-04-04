import { FunctionalComponent } from "preact/src/index.d.ts";
import { paisApi } from "../types.ts";

export type datos = {
    props: paisApi;
}

export const PaisComponent: FunctionalComponent<datos> = (props) => {
    
    return (
        <div>
            <p>Pais: {props.props.pais}</p>
            <a href={`/Capital/${props.props.capital}`}><p></p>Capital: {props.props.capital}</a>
        </div>
    );
}