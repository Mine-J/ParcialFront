import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";

import { ciudadApi } from "../../types.ts";
import { CiudadComponent, datos } from "../../components/CiudadComponent.tsx";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, datos>) {
    const ciudad = ctx.params.ciudad;
    const api_Key = Deno.env.get("API_KEY");
    const responseTelefono = await (Axios.get(
      "https://api.api-ninjas.com/v1/country?name=" + ciudad,
      { headers: { "X-Api-Key": api_Key } },
    ));

    const responseLatYLon = await (Axios.get(
      `https://api.api-ninjas.com/v1/city?name=` + ciudad,
      { headers: { "X-Api-Key": api_Key } },
    ));

    const responsetemp = await (Axios.get(
      `https://api.api-ninjas.com/v1/weather?lat=${
        responseLatYLon.data[0].latitude
      }&lon=${responseLatYLon.data[0].longitude}`,
      { headers: { "X-Api-Key": api_Key } },
    ));

    const response: ciudadApi = {
      pais: responseTelefono.data[0].name,
      ciudad: ciudad,
      temperatura: responsetemp.data.temp,
    };

    return ctx.render({ props: response });
  },
};

const Page = (props: PageProps<datos>) => {
  
  return <CiudadComponent props={props.data.props} />;
};
export default Page;
