import { Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import * as S from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useState } from 'react';

interface PinProps {
  image: string;
  title: string;
}

function Pin({ image, title }:PinProps) {
  const [ratio, setRatio] = useState(1/1);

  Image.getSize(image, (width, height) => setRatio(width / height));

  return(
    <S.Container>
      <S.Wrapper>
        <S.PinImage ratio={ratio} source={{ uri: image }} />

        <S.HeartBtn>
          <AntDesign name="hearto" size={RFValue(20)} color="black" />
        </S.HeartBtn>
      </S.Wrapper>


      <S.PinTitle>{title}</S.PinTitle>
    </S.Container>
  );
}

export { Pin }