<template>
	<BoardCreate />
	<div v-for="item in items" :key="item.id">
		<BoardItem
			:title="item.title"
			:content="item.content"
			:created-at="item.createdAt"
		></BoardItem>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import BoardCreate from './board/BoardCreate.vue';
import BoardItem from './board/BoardItem.vue';
import { getPosts } from '@/axios/posts';

const items = ref([]);

const postList = async () => {
	try {
		const { data } = await getPosts();
		items.value = data;
	} catch (err) {
		console.error(err);
	}
};

postList();

//modal
const show = ref(false);
const modalTitle = ref('');
const modalContent = ref('');
const modalCreatedAt = ref('');

const openModal = ({ title, content, createdAt }) => {
	show.value = true;
	modalTitle.value = title;
	modalContent.value = content;
	modalCreatedAt.value = createdAt;
};
</script>

<style>
.card {
	border-radius: 4px;
	background: #fff;
	box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
	transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
		0.3s box-shadow,
		0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
	padding: 14px 80px 18px 36px;
	cursor: pointer;
}

.card:hover {
	transform: scale(1.05);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.card h3 {
	font-weight: 600;
}

.card img {
	position: absolute;
	top: 20px;
	right: 15px;
	max-height: 120px;
}

@media (max-width: 990px) {
	.card {
		margin: 20px;
	}
}
</style>
