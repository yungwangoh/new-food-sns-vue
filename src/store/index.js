import { defineStore } from 'pinia';

export const useLoginData = defineStore('loginData', {
	state: () => ({
		memberInfo: null,
	}),
	actions: {
		setUserData(userInfo) {
			this.memberInfo = userInfo;
		},
	},
});
