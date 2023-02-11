<template>
	<div class="container">
		<div class="row g-3 mt-5">
			<div class="col-3"></div>
			<div class="card col-6">
				<h2 class="card-title text-center mt-4">회원 가입</h2>
				<hr class="my-4" />
				<form>
					<div>
						<label for="name" class="form-label">닉네임</label>
						<input type="text" class="form-control" id="name" />
					</div>
					<div>
						<label for="id" class="form-label">아이디</label>
						<input type="text" class="form-control" id="id" />
					</div>
					<div>
						<label for="pwd" class="form-label">비밀번호</label>
						<input type="password" class="form-control mb-5" id="pwd" />
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
