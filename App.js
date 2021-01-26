import * as Google from 'expo-google-app-auth';
import React, {useState} from 'react';
import {Box, Button, Text} from 'react-native-magnus';
import {StatusBar} from 'expo-status-bar';

const GOOGLE_CLIENT_ID =
  '1039277652891-f2bm28rsr2rdlmh56mst76t677abq2sb.apps.googleusercontent.com';

export default function App() {
  const [accessToken, setAccessToken] = useState(null);

  async function logIn() {
    const {type, accessToken} = await Google.logInAsync({
      clientId: GOOGLE_CLIENT_ID
    });

    if (type === 'success') {
      setAccessToken(accessToken);
    }
  }

  async function logOut() {
    await Google.logOutAsync({
      accessToken,
      clientId: GOOGLE_CLIENT_ID
    });
    setAccessToken(null);
  }

  return (
    <Box flex={1} alignItems="center" justifyContent="center" bg="tomato">
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={accessToken ? logOut : logIn}>
        {accessToken ? 'Log out' : 'Sign in with Google'}
      </Button>
      <StatusBar style="auto" />
    </Box>
  );
}
