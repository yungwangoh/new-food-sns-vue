<template>
	<div class="container">
		<div class="row g-5 mt-5">
			<div class="col-3"></div>
			<div class="card col-6">
				<h2 class="card-title text-center mt-4">로그인</h2>
				<hr class="my-4" />
				<form @submit.prevent="loginFunc">
					<div>
						<label for="id" class="form-label">이메일</label>
						<input
							v-model="loginForm.email"
							type="text"
							class="form-control mb-3"
							id="id"
						/>
					</div>
					<div>
						<label for="pwd" class="form-label">비밀번호</label>
						<input
							v-model="loginForm.password"
							type="password"
							class="form-control mb-3"
							id="pwd"
						/>
					</div>
					<div class="row g-2 mb-2">
						<div class="col-auto me-auto"></div>
						<div class="col-auto">
							<button class="btn btn-secondary" @click="goToHome">
								뒤로 가기
							</button>
						</div>
						<div class="col-auto">
							<button class="btn btn-primary">로그인</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { login } from '@/axios/posts';
import { ref } from 'vue';
import { useLoginData } from '@/store';

const router = useRouter();
const loginData = useLoginData();

const goToHome = () => {
	router.push('/');
};

const loginForm = ref({
	email: null,
	password: null,
});

const setLoginInfo = ({ memberResponseDto, token }) => {
	localStorage.setItem('user', token);
	loginData.setUserData(memberResponseDto);
};

const loginFunc = async () => {
	try {
		const memberResponseDto = await login({ ...loginForm.value });
		console.log(memberResponseDto.data);
		setLoginInfo(memberResponseDto.data);
		router.push('/');
	} catch (err) {
		console.error(err);
	}
};
</script>

<style lang="scss" scoped></style>
