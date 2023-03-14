import { useState } from "react";
import ProgressBar from "../../components/ProgressBar";
import { Container, Title, Text, Scroll } from "./styles";

type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: { height: number };
};

const Post = () => {
  const [scrollPercentageValue, setScrollPercentageValue] = useState(0);

  const getScrollPercentage = ({
    contentOffset,
    contentSize,
    layoutMeasurement,
  }: ScrollProps) => {
    const value =
      ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;

    setScrollPercentageValue(value);
  };

  return (
    <Container>
      <Scroll onScroll={(e) => getScrollPercentage(e.nativeEvent)}>
        <Title>Lorem ipsum :)</Title>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          laborum eaque omnis dignissimos quia, molestiae, nemo maxime illo,
          harum quidem velit nesciunt doloremque quae in magni. Sint enim ullam
          soluta!
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          laborum eaque omnis dignissimos quia, molestiae, nemo maxime illo,
          harum quidem velit nesciunt doloremque quae in magni. Sint enim ullam
          soluta!
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          laborum eaque omnis dignissimos quia, molestiae, nemo maxime illo,
          harum quidem velit nesciunt doloremque quae in magni. Sint enim ullam
          soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          delectus nisi necessitatibus corrupti consequuntur deserunt explicabo
          minus laboriosam laudantium inventore aperiam similique officia ut,
          repellat impedit sed tenetur quisquam praesentium.
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          laborum eaque omnis dignissimos quia, molestiae, nemo maxime illo,
          harum quidem velit nesciunt doloremque quae in magni. Sint enim ullam
          soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi quidem, recusandae possimus optio cupiditate accusamus enim
          magni nam. Cupiditate, quam officia neque enim rerum dolores ratione!
          Dolore vel unde a. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Sequi sunt culpa porro dolorem veritatis voluptatibus, quia
          nihil quam eius, fugiat nostrum autem necessitatibus illo molestiae
          cupiditate? Corrupti necessitatibus laboriosam error!
        </Text>
      </Scroll>

      <ProgressBar percentage={scrollPercentageValue} />
    </Container>
  );
};
export default Post;
