<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent=""
		>
			<template #actions>
				<button class="btn btn-secondary" @click="goToDetailPage(id)">
					뒤로 가기
				</button>
				<button class="btn btn-primary" @click="edit()">수정</button>
			</template>
		</PostForm>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import PostForm from './form/PostForm.vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/axios/posts';

const route = useRoute();
const router = useRouter();

const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});

const setPost = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};

const searchPostById = async id => {
	try {
		const { data } = await getPostById(id);
		setPost(data);
	} catch (err) {
		console.error(err);
	}
};

searchPostById(id);

const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		router.push(`/board/${id}`);
	} catch (err) {
		console.error(err);
	}
};

const goToDetailPage = id => {
	router.push(`/board/${id}`);
};
</script>

<style lang="scss" scoped></style>
