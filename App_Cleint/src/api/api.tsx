import { View, Text } from 'react-native';
import React from 'react';
import axios from 'axios';

import useRecorder from '../Hooks/UseRecorder/useRecorder';

import { useNavigation } from '@react-navigation/native';

export default function api() {
  // CHAMADAS API VIA AXIOS IRAO AQUI...
  // ESPERANDO A FINALIZAÇÃO DO SERVER

  const navigation = useNavigation();

  const { loading, setLoading, setErrorMessage, errorMessage } = useRecorder();

  const err = () => {
    setLoading(false);
    setErrorMessage({ message: 'Ops, parece que tem algo de errado com o ChatGPT', status: true });
  };

  return (
    <View>
      <Text>api</Text>
    </View>
  );
}
