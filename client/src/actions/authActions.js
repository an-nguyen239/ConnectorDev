import { GET_ERRORS } from './types';
import axios from 'axios';

// Register User

export const registerUser = (userData, history) => dispatch => {
	axios
	.post('/api/users/register', userData)
	.then(res => history.push('/login'))
	.catch(err =>
		dispatch ({
			//redux thunk allows to-do this
			type: GET_ERRORS,
			payload: err.response.data
		})
	);
};

