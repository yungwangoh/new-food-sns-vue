<template>
	<header>
		<nav class="navbar bg-body-tertiary bg-warning">
			<div class="container-fluid">
				<a class="navbar-brand" href="#" @click="goToHome"
					><h4 class="fw-bold">FoodSNS</h4></a
				>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<MainOffcanvas v-if="itemCheckVar === null" />
				<LoginOffCanvas v-else />
			</div>
		</nav>
	</header>
</template>

<script setup>
import MainOffcanvas from './MainOffcanvas.vue';
import LoginOffCanvas from './login/offcanvas/LoginOffCanvas.vue';
import { useRouter } from 'vue-router';

const itemCheckVar = localStorage.getItem('user');
const router = useRouter();
const goToHome = () => {
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
