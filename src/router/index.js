import { createRouter, createWebHistory } from 'vue-router';
import MemberLogin from '@/components/login/MemberLogin.vue';
import MemberCreate from '@/components/member/MemberCreate.vue';
import MainHome from '@/components/MainHome.vue';
import BoardCreateForm from '@/components/board/form/BoardCreateForm.vue';

const routes = [
	{
		path: '/',
		component: MainHome,
	},
	{
		path: '/login',
		component: MemberLogin,
	},
	{
		path: '/member-create',
		component: MemberCreate,
	},
	{
		path: '/board-create',
		component: BoardCreateForm,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
