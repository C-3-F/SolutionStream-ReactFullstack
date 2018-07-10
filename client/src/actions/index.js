import axios from 'axios';
import { FETCH_USER } from './types';

//helps send object to front-end to tell if user is signed in
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};
