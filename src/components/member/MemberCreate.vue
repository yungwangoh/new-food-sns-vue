<template>
	<div class="container">
		<div class="row g-3 mt-5">
			<div class="col-3"></div>
			<div class="card col-6">
				<h2 class="card-title text-center mt-4">회원 가입</h2>
				<hr class="my-4" />
				<form @submit.prevent="memberCreateForm">
					<div>
						<label for="name" class="form-label">닉네임</label>
						<input
							v-model="memberForm.username"
							type="text"
							class="form-control mb-3"
							id="name"
						/>
					</div>
					<div>
						<label for="id" class="form-label">이메일</label>
						<input
							v-model="memberForm.email"
							type="text"
							class="form-control mb-3"
							id="id"
						/>
					</div>
					<div>
						<label for="pwd" class="form-label">비밀번호</label>
						<input
							v-model="memberForm.password"
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
							<button class="btn btn-primary">회원 가입</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { memberCreate } from '@/axios/posts';

const userInfo = ref();

const router = useRouter();

const goToHome = () => {
	router.push('/');
};

const memberForm = ref({
	username: null,
	email: null,
	password: null,
});

const memberCreateForm = () => {
	try {
		const { result } = memberCreate({ ...memberForm.value });
		userInfo.value = result;
		router.push('/');
	} catch (err) {
		console.error(err);
	}
};
</script>

<style lang="scss" scoped></style>
