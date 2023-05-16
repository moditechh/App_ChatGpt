import React, { useEffect, useState } from 'react';
import { Conteiner } from './styles';

import { ActivityIndicator } from 'react-native';
import { TextLoad } from '../../styles';

export default function Loading() {
  const [loadMessage, setLoadMessage] = useState('Carregando Resposta');

  useEffect(() => {
    setTimeout(() => {
      setLoadMessage('Sua resposta estará pronta em Breve...');
    }, 5000);
  }, []);

  return (
    <Conteiner>
      <ActivityIndicator size={70} color="#0055ff" />
      <TextLoad size={22} weight="500" color="#0055ff">
        {loadMessage}
      </TextLoad>
    </Conteiner>
  );
}
