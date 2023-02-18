<template>
	<div
		class="offcanvas offcanvas-end"
		tabindex="-1"
		id="offcanvasNavbar"
		aria-labelledby="offcanvasNavbarLabel"
	>
		<div v-if="$slots.header" class="offcanvas-header">
			<slot name="header"></slot>
			<!-- <h2 class="offcanvas-title" id="offcanvasNavbarLabel">Infomation</h2>
			<button
				type="button"
				class="btn-close"
				data-bs-dismiss="offcanvas"
				aria-label="Close"
			></button> -->
		</div>
		<div v-if="$slots.default" class="offcanvas-body">
			<slot></slot>
			<!-- <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
			</ul> -->
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
