import React from 'react';
import SocialMediaButton from '../../components/SocialMediaButton';
import GoogleLogo from '../../../assets/images/google.png';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const GoogleSignIn = () => {
    const navigation = useNavigation();
    
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
          clientId: '266002113076-v7m92850spudj7d6ojahsbr217p5cbae.apps.googleusercontent.com',
        },
      );
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { id_token } = response.params;
          const auth = getAuth();
          const user = auth.currentUser;
          const credential = GoogleAuthProvider.credential(id_token);
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
        source={GoogleLogo}
        type="google"
    />
  )
}

export default GoogleSignIn;