import {
    GoogleSignin,
} from '@react-native-google-signin/google-signin';

export const configGoogle = () => {
    GoogleSignin.configure({
        webClientId: '769042790963-94hj79aeph04i1gjhqkc67pknsg3f5sk.apps.googleusercontent.com',
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        hostedDomain: '', // specifies a hosted domain restriction
        forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
        accountName: '', // [Android] specifies an account name on the device that should be used
    });
}

module.exports = {
    configGoogle,
}