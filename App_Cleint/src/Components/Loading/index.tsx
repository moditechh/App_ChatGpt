import React from 'react';
import { Conteiner } from './styles';

import { ActivityIndicator } from 'react-native';
import { Text } from '../../styles';

export default function Loading() {
  return (
    <Conteiner>
      <ActivityIndicator size={70} color="#0055ff" />
      <Text size={22} weight="500" color="#0055ff">
        Carregando Dados
      </Text>
    </Conteiner>
  );
}
