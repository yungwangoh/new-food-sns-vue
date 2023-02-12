<template>
	<div>
		<h1 class="mb-5">{{ post.title }}</h1>
		<p>{{ post.content }}</p>
		<hr class="my-4" />
		<div class="row g-2">
			<div class="col-auto me-auto"></div>
			<div class="col-auto">
				<button class="btn btn-secondary" @click="goToHome">목록</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-primary" @click="goToEdit(id)">수정</button>
			</div>
			<div class="col-auto">
				<button class="btn btn-danger" @click="goToRemove(id)">삭제</button>
			</div>
		</div>
	</div>
</template>

<script setup>
import { getPostById } from '@/axios/posts';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { deletePost } from '@/axios/posts';

const route = useRoute();
const router = useRouter();

const post = ref({
	title: null,
	content: null,
	createdAt: null,
});

const id = route.params.id;

const searchPostById = async () => {
	try {
		const { data } = await getPostById(id);
		setPost(data);
	} catch (err) {
		console.error(err);
	}
};

const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};

searchPostById();

const goToHome = () => {
	router.push('/');
};

const goToEdit = id => {
	router.push(`/board/${id}/edit`);
};

const goToRemove = async id => {
	try {
		if (confirm('삭제하시겠습니까?') === false) {
			return;
		}
		await deletePost(id);
		router.push('/');
	} catch (err) {
		console.error(err);
	}
};
</script>

<style lang="scss" scoped></style>
