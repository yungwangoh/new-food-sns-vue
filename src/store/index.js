import { defineStore } from 'pinia';
import { posts } from '@/axios';
import router from '@/router';

export const useLogin = defineStore('login', {
	state: () => ({
		user: JSON.parse(localStorage.getItem('user')),
		returnUrl: null,
	}),
	getters: {},
	actions: {
		async login(email, password) {
			const user = posts.post('/member/login', { email, password });

			this.user = user;

			localStorage.setItem('user', JSON.stringify(user));

			router.push(this.returnUrl, '/');
		},
		logout(email) {
			this.use = null;
			posts.get('/member/logout', email);
			localStorage.removeItem('user');
			router.push(this.returnUrl, '/');
		},
	},
});
