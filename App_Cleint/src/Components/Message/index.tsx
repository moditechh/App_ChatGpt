import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { Icon, MessageText } from './styles';

type IMessageProps = {
  label: string;
};

export default function Message({ label }: IMessageProps) {
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

  return (
    <Animated.View
      style={{
        opacity: animet,
        backgroundColor: '#FFF',
        width: '100%',
        height: 70,
        flexDirection: 'row',
        position: 'absolute',
        top: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderLeftWidth: 7,
        borderLeftColor: '#ce1919',
      }}
    >
      <Icon color="#ce1919" name="times-circle-o" size={35} style={{ marginLeft: 10 }} />
      <MessageText>{label}</MessageText>
    </Animated.View>
  );
}
