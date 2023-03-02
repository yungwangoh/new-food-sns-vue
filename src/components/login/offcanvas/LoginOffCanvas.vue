<template>
	<AppOffcanvas>
		<template #header>
			<h2 class="offcanvas-title" id="offcanvasNavbarLabel">
				{{ loginInfoStore.memberInfo }}
			</h2>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			></button>
		</template>
		<template #default>
			<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="#" @click="logoutFunc"
						>로그아웃</a
					>
				</li>
				<li class="nav-item">
					<a
						class="nav-link"
						aria-current="page"
						href="#"
						@click="goToMemberCreate"
						>내가 올린 레시피</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="goToLogin">내 정보</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="goToLogin">친구</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="cancle">취소</a>
				</li>
			</ul>
		</template>
	</AppOffcanvas>
</template>

<script setup>
import AppOffcanvas from '@/components/itemList/AppOffcanvas.vue';
import { logout } from '@/axios/posts';
import { ref } from 'vue';
import { useLoginData } from '@/store';
import { useRouter } from 'vue-router';

const loginInfoStore = useLoginData();
const router = useRouter();

const logoutFunc = async () => {
	try {
		const result = await logout();
		localStorage.removeItem('user');
		router.push('/');
	} catch (err) {
		console.error(err);
	}
};

const cancle = () => {
	localStorage.clear();
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
