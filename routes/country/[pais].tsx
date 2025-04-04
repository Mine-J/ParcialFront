import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { datos, PaisComponent } from "../../components/PaisComponent.tsx";
import { paisApi } from "../../types.ts";

export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, datos>) {
    
        const pais = ctx.params.pais;
        const api_Key = Deno.env.get("API_KEY");
      const responseTelefono = await (Axios.get(
        "https://api.api-ninjas.com/v1/country?name=" + pais,
        { headers: { "X-Api-Key": api_Key } },
      ));
        
        const response:paisApi = {
          pais: responseTelefono.data[0].name,
          capital: responseTelefono.data[0].capital
        }
        
        ctx.render({props:response});
    }
}

const Page = (props:PageProps<datos>) => {
    return (
        <div>
            <PaisComponent props={props.data.props} />
        </div>
    );
}
export default Page;