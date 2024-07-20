import { ref } from 'vue';
import { projectAuth } from '../firebase/config';
import { signOut } from 'firebase/auth';

const error = ref(null);

const logout = async () => {
  error.value = null;

  try {
    await signOut(projectAuth);
    error.value = null;
  } catch (err) {
    console.log(err.message);
    error.value = 'Failed to log out';
  }
};

const useLogout = () => {
  return { error, logout };
};

export default useLogout;
