import axios from 'axios';

const setAuthToken = token => {
	if (token) {
		//Apply to every request
		axios.defaults.headers.common['Authorization'] = token;
	} else {
		//Delete Auth header
		delete axios.dafaults.headers.common['Authorization'];
	}
}

export default setAuthToken;