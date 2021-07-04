import Head from "next/head";
import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import { BLOG_NAME } from "../lib/constants";
import ContactForm from "../components/contact-form";

export default function Contact() {
  return (
    <>
      <Layout>
        <Head>
          <title>İletişim | {BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          <ContactForm />
        </Container>
      </Layout>
    </>
  );
}
