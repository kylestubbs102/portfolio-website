import { NextComponentType, NextPageContext } from "next";
import { NextRouter } from "next/router";
import Layout from "../components/common/Layout";
import { Chakra } from "../lib/src/Chakra";

interface PageProps {
  cookies?: string;
}

interface AppRenderProps {
  pageProps: PageProps;
  err?: Error;
  Component: NextComponentType<NextPageContext, AppRenderProps, object>;
  router: NextRouter;
}

function MyApp({ Component, pageProps }: AppRenderProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Chakra>
  );
}

export default MyApp;
