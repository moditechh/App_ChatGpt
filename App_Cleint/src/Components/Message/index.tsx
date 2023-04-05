import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Button, Conteiner, Icon, MessageText } from './styles';

type IMessageProps = {
  message: string;
  type: 'success' | 'error' | 'alert';
  // show: string;
};

export default function Message({ message, type }: IMessageProps) {
  const animet = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animet, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    setTimeout(() => {
      Animated.timing(animet, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }, 4000);
  };

  useEffect(() => {
    fadeIn();
    fadeOut();
  }, []);

  const color = type === 'success' ? '#0c9e1d' : type === 'error' ? '#ce1919' : '#6aa9f2';
  const name =
    type === 'success' ? 'check-circle-o' : type === 'error' ? 'times-circle-o' : 'info-circle';

  return (
    <Animated.View
      style={{
        opacity: animet,
        backgroundColor: '#FFF',
        width: '100%',
        height: 50,
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderLeftWidth: 5,
        borderLeftColor: color,
      }}
    >
      <Icon color={color} name={name} size={35} style={{ marginLeft: 10 }} />
      <MessageText>{message}</MessageText>
    </Animated.View>
  );
}
