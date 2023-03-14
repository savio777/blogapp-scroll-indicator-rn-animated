import { ScrollViewProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #212121;
  padding: 20px 32px 0;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #fff;
  margin: 22px 0;
`;

export const Scroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
} as ScrollViewProps)``;
