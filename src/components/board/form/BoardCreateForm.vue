<template>
	<div class="mt-5">
		<h2>게시글 등록</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="save"
		>
			<template #actions>
				<div class="pt-4">
					<button
						type="button"
						class="btn btn-outline-dark me-2"
						@click="goHome"
					>
						목록
					</button>

					<button class="btn btn-primary">저장</button>
				</div>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import PostForm from './PostForm.vue';
import { ref } from 'vue';
import { createPost } from '@/axios/posts';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = ref({
	title: null,
	content: null,
});

const save = () => {
	try {
		createPost({
			...form.value,
			createdAt: Date.now(),
		});
		router.push('/');
	} catch (err) {
		console.error(err);
	}
};

const goHome = () => {
	router.push('/');
};
</script>

<style lang="scss" scoped></style>
