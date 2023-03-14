import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #29292e;
  position: absolute;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 56px;
  border-radius: 12px;
  bottom: 32px;
  padding: 16px;
`;

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
