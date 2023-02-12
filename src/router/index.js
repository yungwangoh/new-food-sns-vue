import { createRouter, createWebHistory } from 'vue-router';
import MemberLogin from '@/components/login/MemberLogin.vue';
import MemberCreate from '@/components/member/MemberCreate.vue';
import MainHome from '@/components/MainHome.vue';
import BoardCreateForm from '@/components/board/form/BoardCreateForm.vue';
import BoardDetail from '@/components/board/BoardDetail.vue';
import BoardEdit from '@/components/board/BoardEdit.vue';

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
		path: '/member/create',
		component: MemberCreate,
	},
	{
		path: '/board/create',
		component: BoardCreateForm,
	},
	{
		path: '/board/:id',
		component: BoardDetail,
	},
	{
		path: '/board/:id/edit',
		component: BoardEdit,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
