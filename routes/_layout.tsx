import { PageProps } from "$fresh/server.ts";
import { Footer } from "../components/Footer.tsx";
import { Header } from "../components/Header.tsx";

export default function Layout({ Component }: PageProps) {
  // do something with state here
  return (
      <div class="layout">
      <Header />
      <div class = "pagina">
        <Component />
      </div>
          
          <Footer/>
    </div>
  );
}