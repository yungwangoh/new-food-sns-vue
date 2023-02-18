<template>
	<AppOffcanvas>
		<template #header>
			<h2 class="offcanvas-title" id="offcanvasNavbarLabel">윤광오</h2>
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
					<a class="nav-link" href="#" @click="goToLogin">설정</a>
				</li>
			</ul>
		</template>
	</AppOffcanvas>
</template>

<script setup>
import AppOffcanvas from '@/components/itemList/AppOffcanvas.vue';
import { logout } from '@/axios/posts';
</script>

<style lang="scss" scoped></style>
