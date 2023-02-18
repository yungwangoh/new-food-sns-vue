<template>
	<AppOffcanvas>
		<template #header>
			<h2 class="offcanvas-title" id="offcanvasNavbarLabel">Infomation</h2>
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
					<a
						class="nav-link"
						aria-current="page"
						href="#"
						@click="goToMemberCreate"
						>회원 가입</a
					>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#" @click="goToLogin">로그인</a>
				</li>
			</ul>
		</template>
	</AppOffcanvas>
</template>

<script setup>
import AppOffcanvas from './itemList/AppOffcanvas.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToLogin = () => {
	router.push('/login');
};
const goToMemberCreate = () => {
	router.push('/member/create');
};
</script>

<style lang="scss" scoped></style>
