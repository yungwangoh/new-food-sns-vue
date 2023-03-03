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

				<component
					:is="tokenChecker ? curComp : (curComp.value = LoginOffCanvas)"
				/>
			</div>
		</nav>
	</header>
</template>

<script setup>
import MainOffcanvas from './MainOffcanvas.vue';
import LoginOffCanvas from './login/offcanvas/LoginOffCanvas.vue';
import { useRouter } from 'vue-router';
import { computed, ref, shallowRef } from 'vue';

const itemCheckVar = ref(localStorage.getItem('user'));
const curComp = shallowRef(MainOffcanvas);

console.log(itemCheckVar);
const router = useRouter();

const tokenChecker = computed(() => {
	return itemCheckVar.value === null ? true : false;
});

const goToHome = () => {
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
