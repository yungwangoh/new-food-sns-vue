<template>
	<header>
		<nav class="navbar bg-body-tertiary bg-warning">
			<div class="container-fluid">
				<a class="navbar-brand" href="#"><h4 class="fw-bold">FoodSNS</h4></a>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="offcanvas"
					data-bs-target="#offcanvasNavbar"
					aria-controls="offcanvasNavbar"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div
					class="offcanvas offcanvas-end"
					tabindex="-1"
					id="offcanvasNavbar"
					aria-labelledby="offcanvasNavbarLabel"
				>
					<div class="offcanvas-header">
						<h5 class="offcanvas-title" id="offcanvasNavbarLabel">
							Infomation
						</h5>
						<button
							type="button"
							class="btn-close"
							data-bs-dismiss="offcanvas"
							aria-label="Close"
						></button>
					</div>
					<div class="offcanvas-body">
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
					</div>
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
	router.push('/member/create');
};
</script>

<style lang="scss" scoped></style>
