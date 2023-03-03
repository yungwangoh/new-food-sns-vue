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

				<component :is="curComp" />
			</div>
		</nav>
	</header>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import LoginOffCanvas from './login/offcanvas/LoginOffCanvas.vue';
import MainOffcanvas from './MainOffcanvas.vue';

const tokenCheck = ref(localStorage.getItem('user'));
const curComp = ref(MainOffcanvas);

const changeComp = () => {
	if (tokenCheck.value === null) curComp.value = MainOffcanvas;
	else curComp.value = LoginOffCanvas;
};

changeComp();

const router = useRouter();

const goToHome = () => {
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
