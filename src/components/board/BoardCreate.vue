<template>
	<AppCard class="mb-5" @click="goToBoardCreate">
		<h2 class="card-title text-center fw-bold">오늘의 레시피는 뭔가요?</h2>
	</AppCard>
</template>

<script setup>
import AppCard from '../itemList/AppCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const goToBoardCreate = () => {
	router.push('/board/create');
};
</script>

<style lang="scss" scoped></style>
