import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./styles";
type propsInput = TextInputProps;

const Input = ({ ...rest }: propsInput) => {
  return <Container {...rest} />;
};

export { Input };
