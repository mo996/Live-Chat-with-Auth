import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { projectAuth } from '../firebase/config';

// refs
const user = ref(projectAuth.currentUser);

// listen for auth changes outside of function
// so only one listener is ever attached
onAuthStateChanged(projectAuth, _user => {
  console.log('User state change. Current user is:', _user);
  user.value = _user;
});

const getUser = () => {
  return { user };
};

export default getUser;
