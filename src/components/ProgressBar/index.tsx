import { Container, Title, Progress, Tracker } from "./styles";

type IProgressBarProps = { percentage: number };

const ProgressBar = ({ percentage }: IProgressBarProps) => (
  <Container>
    <Title>{percentage.toFixed(0)}%</Title>

    <Tracker>
      <Progress percentage={percentage} />
    </Tracker>
  </Container>
);

export default ProgressBar;
