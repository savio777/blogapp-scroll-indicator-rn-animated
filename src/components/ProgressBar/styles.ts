import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Title = styled.Text`
  color: #fff;
  margin-right: 7px;
`;

export const Tracker = styled.View`
  flex: 1;
  height: 3px;
  border-radius: 3px;
  background-color: #505059;
`;

export const Progress = styled.View<{ percentage: number }>`
  height: 3px;
  background-color: #8257e5;
  width: ${({ percentage }) => percentage}%;
`;

export const style = StyleSheet.create({
  container: {
    backgroundColor: "#29292e",
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 56,
    borderRadius: 24,
    bottom: 32,
    padding: 16,
  },
  progressContent: {
    flexDirection: "row",
    alignItems: "center",
  },
});
