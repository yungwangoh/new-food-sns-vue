import { posts } from '.';

export function getPosts(params) {
	return posts.get('/', { params });
}

export function getPostById(id) {
	return posts.get(`${id}`);
}

export function createPost(data) {
	return posts.post('', data);
}

export function updatePost(id, data) {
	return posts.patch(`${id}`, data);
}

export function deletePost(id) {
	return posts.delete(`${id}`);
}

export function memberCreate(memberCreate) {
	console.log(memberCreate);
	return posts.post('', memberCreate);
}

export function login(loginData) {
	return posts.post('/login', loginData);
}

export function logout(email, token) {
	return posts.get('/logout', {
		params: { email: email },
		headers: { Authorization: `bearer ${token}` },
	});
}
