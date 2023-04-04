import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Platform, PermissionsAndroid } from 'react-native';
import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent,
} from '@react-native-voice/voice';

export default function useRecorder() {
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState('');
  const [recording, setRecording] = useState(false);
  const [results, setResults] = useState('.............................');
  const [partialResults, setPartialResults] = useState('.............................');
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e: any) => {
    console.log('onSpeechStart: ', e);
  };

  const onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    console.log('onSpeechRecognized: ', e);
  };

  const onSpeechEnd = (e: any) => {
    console.log('onSpeechEnd: ', e);
    setRecording(false);
    setVolume(0);
    // setLoading(true);
  };

  const onSpeechError = (e: SpeechErrorEvent) => {
    console.log('onSpeechError: ', e);
    setErro(JSON.stringify(e.error?.message));
  };

  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechResults: ', e);
    setResults(e.value[0]);
  };

  const onSpeechPartialResults = (e: SpeechResultsEvent) => {
    console.log('onSpeechPartialResults: ', e);
    setResults(e.value[0]);
  };

  const onSpeechVolumeChanged = (e: any) => {
    console.log('onSpeechVolumeChanged: ', e);
    const v = Math.round(e.value) * 10;
    setVolume(v);
  };

  const startRecognizing = async () => {
    if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants['android.permission.RECORD_AUDIO']);

        if (grants['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }

    try {
      await Voice.start('pt-BR');
    } catch (e) {
      console.error(e);
    }
    setRecording(true);
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
    setRecording(false);
    setResults('.............................');
  };
  return { startRecognizing, stopRecognizing, loading, recording, volume, results, setResults };
}

// const _destroyRecognizer = async () => {
//   try {
//     await Voice.destroy();
//   } catch (e) {
//     console.error(e);
//   }
//   setResults('');
//   setRecording(false);
//   setResults('.............................');
// };

// const _cancelRecognizing = async () => {
//   try {
//     await Voice.cancel();
//   } catch (e) {
//     console.error(e);
//   }
//   setRecording(false);
//   setResults('.............................');
// };
