import React from "react";
import { ContainerStyled } from "./styles";

export const Container = ({ children }: { children: React.ReactElement }) => (
  <ContainerStyled>{children}</ContainerStyled>
);

export default Container;
