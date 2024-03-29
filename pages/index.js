import Head from "next/head";
import Container from "../components/container";

import Layout from "../components/layout";
import Header from "../components/header";
import { BLOG_NAME } from "../lib/constants";
import { indexQuery } from "../lib/queries";
import { getClient, overlayDrafts } from "../lib/sanity.server";

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          ANA SAYFA
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery));
  return {
    props: { allPosts, preview },
  };
}
