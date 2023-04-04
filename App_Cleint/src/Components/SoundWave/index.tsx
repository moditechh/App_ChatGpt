import { Animated, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useRef } from 'react';

type ISoundPorps = {
  volume: number;
};

export default function SoundWave({ volume }: ISoundPorps) {
  const currentVolume = volume;

  const maxVolume = 30;

  const ref = useRef(new Animated.Value(0)).current;

  const starAnimation = useCallback(() => {
    Animated.timing(ref, {
      toValue: currentVolume / maxVolume,
      useNativeDriver: true,
      duration: 25,
    }).start();
  }, [ref, currentVolume]);

  useEffect(() => {
    starAnimation();
  }, [starAnimation]);

  const polAnim = ref.interpolate({
    inputRange: [0, 20],
    outputRange: [1, 3],
    extrapolate: 'clamp',
  });
  const polAnimTwo = ref.interpolate({
    inputRange: [0, 25],
    outputRange: [1, 3],
    extrapolate: 'clamp',
  });
  const polAnimTree = ref.interpolate({
    inputRange: [0, 30],
    outputRange: [1, 3],
    extrapolate: 'clamp',
  });

  return (
    <>
      <Animated.View
        style={[
          styles.ripler,
          {
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            height: 160,
            width: 160,
            borderRadius: 160,

            transform: [
              {
                scale: polAnim,
              },
            ],
          },
        ]}
      >
        <Animated.View
          style={[
            styles.riplertwo,
            {
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              height: 140,
              width: 140,
              borderRadius: 140,

              transform: [
                {
                  scale: polAnimTwo,
                },
              ],
            },
          ]}
        >
          <Animated.View
            style={[
              styles.riplertree,
              {
                position: 'absolute',
                height: 120,
                width: 120,
                borderRadius: 120,
                transform: [
                  {
                    scale: polAnimTree,
                  },
                ],
              },
            ]}
          ></Animated.View>
        </Animated.View>
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  ripler: {
    borderColor: 'rgba(16, 24, 247, 0.596)',
    zIndex: 2,
    borderWidth: 10,
  },
  riplertwo: {
    borderColor: 'rgb(255, 254, 254)',
    zIndex: 2,
    borderWidth: 12,
  },
  riplertree: {
    borderColor: '#b0e1fa',
    zIndex: 2,
    borderWidth: 8,
  },
});
