import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Animated, {
  BounceIn,
  BounceOut,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

import { Title, Progress, Tracker, style } from "./styles";

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

type IProgressBarProps = { percentage: number; onScrollToUp: () => void };

const ProgressBar = ({ percentage, onScrollToUp }: IProgressBarProps) => {
  const widthContainer = useSharedValue(200);

  const endReached = percentage >= 95;

  const animatedStyle = useAnimatedStyle(() => ({
    width: widthContainer.value,
  }));

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.3 });
  }, [percentage]);

  return (
    <Animated.View style={[animatedStyle, style.container]}>
      {endReached ? (
        <TouchableOpacityAnimated
          entering={BounceIn}
          exiting={BounceOut}
          onPress={onScrollToUp}
        >
          <Feather name="arrow-up" size={24} color="#c4c4cc" />
        </TouchableOpacityAnimated>
      ) : (
        <Animated.View
          style={style.progressContent}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Title>{percentage.toFixed(0)}%</Title>

          <Tracker>
            <Progress percentage={percentage} />
          </Tracker>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export default ProgressBar;
