import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../components/layouts/Layout";
import { DefaultSeo } from "next-seo";
import "@fontsource/inter";
import theme from "../styles/theme";
import Head from "next/head";
import seo from "../config/seo.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultSeo
        canonical={seo.url}
        title={seo.title}
        description={seo.description}
        openGraph={{
          type: seo.type,
          title: seo.title,
          description: seo.description,
          site_name: seo.title,
          images: [
            {
              url: seo.openGraph.ogImg,
              width: seo.openGraph.width,
              height: seo.openGraph.height,
              alt: `${seo.title} OG Image`,
            },
          ],
        }}
      />

      <ChakraProvider resetCSS theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
