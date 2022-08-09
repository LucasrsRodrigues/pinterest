import { View } from 'react-native';
import { Pin } from '../../components/Pin';

import pins from '../../datas/pins.api';

import * as S from './styles';

function Home() {
  return(
    <S.Container>
      <S.Content>
        {pins.map(pin => (
          <Pin title={pin.title} image={pin.image} />
        ))}
      </S.Content>      
    </S.Container>
  );
}

export { Home }