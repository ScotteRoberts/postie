import Rebase from 're-base';
import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyAe1gridjIB_MsIkY-qygBbFzuZqHq8cWA',
  authDomain: 'roberts-postie.firebaseapp.com',
  databaseURL: 'https://roberts-postie.firebaseio.com',
  projectId: 'roberts-postie',
  storageBucket: 'roberts-postie.appspot.com',
  messagingSenderId: '12851721519',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
