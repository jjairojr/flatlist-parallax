import {Animated, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('screen');
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.47;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AnimatedImage = styled(Animated.Image)`
  width: ${ITEM_WIDTH * 1.4}px;
  height: ${ITEM_HEIGHT}px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  border: 5px solid #544f52;
  position: absolute;

  top: -30px;
  left: 35%;
`;

export const Content = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
`;

export const ImageContent = styled.View`
  width: ${ITEM_WIDTH}px;
  height: ${ITEM_HEIGHT}px;
  overflow: hidden;
  align-items: center;
`;

export const Card = styled.View`
  padding: 8px;
  background-color: #544f52;
  box-shadow: 2px 2px 10px #201e1f;
`;
