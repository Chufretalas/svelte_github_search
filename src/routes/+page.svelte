<script lang="ts">
	import Footer from "$components/Footer.svelte";
	import Navbar from "$components/Navbar.svelte";
	import HomeColumn from "$components/HomeColumn.svelte";

	const exampleData = [
		"Something 1",
		"Something 2",
		"Something 3",
		"Something 4",
		"Something 5",
		"Something 6",
		"Something 7",
		"Something 8"
	];
</script>

<svelte:head>
	<title>Github Search | Home</title>
</svelte:head>

<div class="content-wrapper">
	<Navbar />
	<main>
		<HomeColumn columnTitle="Followers">
			{#each exampleData as data (data)}
				<li>{data} | followers</li>
			{/each}
		</HomeColumn>
		<HomeColumn columnTitle="Repos">
			{#each exampleData as data (data)}
				<li>{data} | repos</li>
			{/each}
		</HomeColumn>
		<HomeColumn columnTitle="Starred">
			{#each exampleData as data (data)}
				<li>{data} | starred</li>
			{/each}
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
</style>
