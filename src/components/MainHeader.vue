<template>
	<header>
		<nav class="navbar navbar-expand-sm navbar-light bg-warning">
			<div class="container-fluid">
				<RouterLink class="navbar-brand" to="/">FoodSNS</RouterLink>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">About</a>
						</li>
					</ul>
				</div>
				<div>
					<button class="btn btn-light me-2" @click="goToMemberCreate">
						회원가입
					</button>
					<button class="btn btn-light" @click="goToLogin">로그인</button>
				</div>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goToLogin = () => {
	router.push('/login');
};
const goToMemberCreate = () => {
	router.push('/member-create');
};
</script>

<style lang="scss" scoped></style>
