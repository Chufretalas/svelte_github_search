<script lang="ts">
	import Footer from "$components/Footer.svelte";
	import Navbar from "$components/Navbar.svelte";
	import HomeColumn from "$components/HomeColumn.svelte";
	import type { PageData } from "./$types";
	import UserCard from "$components/UserCard.svelte";
	import RepoCard from "$components/RepoCard.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>Github Search | Home</title>
</svelte:head>

<div class="content-wrapper">
	<Navbar user={data.user} />
	<main>
		<HomeColumn columnTitle="Followers">
			{#if data.user}
				{#each data.user.followers as follower (follower.nickname)}
					<UserCard user={follower} />
				{/each}
			{/if}
		</HomeColumn>
		<HomeColumn columnTitle="Repos">
			{#if data.user}
				{#each data.user.repos as repo (repo.name)}
					<RepoCard {repo} />
				{/each}
			{/if}
		</HomeColumn>
		<HomeColumn columnTitle="Starred">
			{#if data.user}
				{#each data.user.starred as repo (repo.name)}
					<RepoCard {repo} />
				{/each}
			{/if}
		</HomeColumn>
	</main>
	<Footer />
</div>

<style>
	main {
		margin-top: 20px;
		justify-self: center;
		height: 100%;
		width: 80%;
		display: flex;
		justify-content: space-evenly;
	}
	.content-wrapper {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-rows: 2fr 14fr 1fr;
		row-gap: 10px;
		align-items: center;
	}

	@media screen and (max-width: 600px) {
		main {
			flex-direction: column;
			row-gap: 10px;
		}
	}
</style>
