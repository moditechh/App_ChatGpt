import { createContext, useContext, useState } from 'react';
import React from 'react';

type IRecorderContext = {
  children: React.ReactNode;
};

type IRecorderProps = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  errorMessage: { message: string; status: boolean };
  setErrorMessage: ({ message: string, status: boolean }) => void;
};

export const Recorder = createContext({} as IRecorderProps);

const RecorderContext = ({ children }: IRecorderContext) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ message: '', status: false });

  return (
    <Recorder.Provider value={{ loading, setLoading, errorMessage, setErrorMessage }}>
      {children}
    </Recorder.Provider>
  );
};

export default RecorderContext;

export const useRecorderContext = () => useContext(Recorder);
