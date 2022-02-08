import type { NextPage } from "next";
import Image from "next/image";
import Header from "../components/header";
import Container from "../components/layout";
import { PageTitle, WrapperHome, PageDescription } from "./styles";

const Home: NextPage = () => {
  return (
    <Container>
      <>
        <Header />
        <WrapperHome>
          <PageTitle>DDR_SOFTWARE</PageTitle>
          <PageDescription>lançamento 09/02/2022</PageDescription>
        </WrapperHome>
      </>
    </Container>
  );
};

export default Home;
