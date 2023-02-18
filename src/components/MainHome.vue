<template>
	<BoardCreate />

	<!-- <AppGrid :items="posts" col-class="col-12 col-md-6 col-lg-4">
		<template v-slot="{ item }">
			<BoardItem
				:title="item.title"
				:content="item.content"
				:created-at="item.createdAt"
				@modal="openModal(item)"
				@click="goToDetailPage(item.id)"
			/>
		</template>
	</AppGrid>

	<Teleport to="#modal">
		<BoardModal
			v-model="show"
			:title="modalTitle"
			:content="modalContent"
			:created-at="modalCreatedAt"
		/>
	</Teleport>

	<AppPagination
		:current-page="params._page"
		:page-count="pageCount"
		@page="page => (params._page = page)"
	></AppPagination> -->
</template>

<script setup>
// import { computed, ref, watchEffect } from 'vue';
// import BoardCreate from './board/BoardCreate.vue';
// import BoardModal from './board/modal/BoardModal.vue';
// import AppGrid from './itemList/AppGrid.vue';
// import AppPagination from './itemList/AppPagination.vue';
// import BoardItem from './board/BoardItem.vue';
// import { getPosts } from '@/axios/posts';
// import { useRouter } from 'vue-router';

// const posts = ref([]);
// const router = useRouter();
// const totalCount = ref(0);
// const params = ref({
// 	_sort: 'createdAt',
// 	_order: 'desc',
// 	_page: 1,
// 	_limit: 9,
// 	title_like: '',
// });

// const postList = async () => {
// 	try {
// 		const { data, headers } = await getPosts(params.value);
// 		posts.value = data;
// 		totalCount.value = headers['x-total-count'];
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

// const goToDetailPage = id => {
// 	router.push(`/board/${id}`);
// };

// // pagination
// const pageCount = computed(() =>
// 	Math.ceil(totalCount.value / params.value._limit),
// );

// watchEffect(postList);

// //modal
// const show = ref(false);
// const modalTitle = ref('');
// const modalContent = ref('');
// const modalCreatedAt = ref('');

// const openModal = ({ title, content, createdAt }) => {
// 	show.value = true;
// 	modalTitle.value = title;
// 	modalContent.value = content;
// 	modalCreatedAt.value = createdAt;
// };
</script>

<style></style>
