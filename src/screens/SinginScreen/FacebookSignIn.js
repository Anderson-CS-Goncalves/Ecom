
import React from 'react';
import SocialMediaButton from '../../components/SocialMediaButton';
import FacebookLogo from '../../../assets/images/facebook.png';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { getAuth, onAuthStateChanged, FacebookAuthProvider, signInWithCredential } from 'firebase/auth';
import { ResponseType } from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native';

const FacebookSignIn = () => {
    const navigation = useNavigation();

    const [request, response, promptAsync] = Facebook.useAuthRequest({
        responseType: ResponseType.Token,
        clientId: '497512081928740',
        redirectUri: "https://auth.expo.io/@andersoncsg/ecom"
      });

      React.useEffect(() => {
    if (response?.type === 'success') {
      const { access_token } = response.params;
      const auth = getAuth();
      const user = auth.currentUser;
      const credential = FacebookAuthProvider.credential(access_token)
      onAuthStateChanged(auth, (user) => {
        if (user) {
            const profile = {
                userEmail : user.email,
                userName : user.displayName,
                userPhoto : user.photoURL,
              }
            navigation.navigate('Router', {profile})
        }
        else {
          console.warn('erro')
          navigation.goBack()
        }
      })
      signInWithCredential(auth, credential);
    }
  }, [response]);


  return (
    <SocialMediaButton 
        onPress={() => {
        promptAsync();
        }}
        disabled={!request}
        source={FacebookLogo}
        type="facebook"
    />
  )
}

export default FacebookSignIn