import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { data, FormularioTelefono } from "../components/FormularioTelefono.tsx";
import { telefonoApi } from "../types.ts";
import Axios from "npm:axios";

export const handler: Handlers = {
  async GET(req: Request, ctx: FreshContext<unknown, data>) {
    const url = new URL(req.url);
    const telefono = url.searchParams.get("telefono") || "";

    if (telefono === null || telefono === "") {
      return ctx.render({ props: { is_valid: false, telefono: "", pais: "" } });
    } else {
      const api_Key = Deno.env.get("API_KEY");
      const responseTelefono = await Axios.get(
        "https://api.api-ninjas.com/v1/validatephone?number=" + telefono,
        { headers: { "X-Api-Key": api_Key } },
      );

      const respuesta: telefonoApi = {
        is_valid: responseTelefono.data.is_valid,
        telefono: responseTelefono.data.format_international,
        pais: responseTelefono.data.country,
      };
      return ctx.render({ props: respuesta });
    }
  },
};

const Page = (props: PageProps<data>) => {
  const datos = props.data.props;
  return <FormularioTelefono props={datos} />;
};
export default Page;
