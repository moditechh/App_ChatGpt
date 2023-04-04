import { View } from 'react-native';
import React from 'react';
import { Button, ButtonSpik, Conteiner, Header, Player, Text } from '../../styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function RecordPlayer() {
  return (
    <Conteiner>
      <Header>
        <Text color="#999" weight="400">
          Good Morning
        </Text>
        <Text>Pergunta:</Text>
      </Header>
      <Player>
        <ButtonSpik bg>
          <Icon name="backward" color="#ffffff" size={25} />
          <Text size={12} weight="600">
            10 sec
          </Text>
        </ButtonSpik>
        <Button bg>
          <Icon name="play" color="#ffffff" size={60} />
        </Button>
        <ButtonSpik bg>
          <Icon name="forward" color="#ffffff" size={25} />
          <Text size={12} weight="600">
            10 sec
          </Text>
        </ButtonSpik>
      </Player>
    </Conteiner>
  );
}
