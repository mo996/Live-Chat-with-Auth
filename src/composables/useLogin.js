import { ref } from 'vue';
import { projectAuth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const res = await signInWithEmailAndPassword(projectAuth, email, password);
    error.value = null;
    return res;

  } catch (err) {
    console.log(err.message);
    error.value = 'Incorrect login credentials';
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
