import styled from 'styled-components/native';

interface PinImageProps {
  ratio: number;
}

export const Container = styled.View`
  padding: 10px;
`;

export const Wrapper = styled.View``;

export const PinImage = styled.Image<PinImageProps>`
  width: 100%;
  border-radius: 25px;
  aspect-ratio: ${({ ratio }) => ratio};
`;

export const PinTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 10px;
`;

export const HeartBtn = styled.Pressable`
  background-color: #d3dfd4;
  position: absolute;
  bottom: 10px;
  right:10px;
  border-radius: 50%;
  padding: 5px;
`;