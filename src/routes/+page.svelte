<script lang="ts">
	import Footer from "$components/Footer.svelte";
	import Navbar from "$components/Navbar.svelte";
</script>

<svelte:head>
	<title>Github Search | Home</title>
</svelte:head>

<div class="content-wrapper">
	<Navbar />
	<main>
		<div class="main-content-wrapper">
			<div class="column followers-wrapper">
				<h2 class="column-title">Follower</h2>
				<ul class="followers-list">
					<li>Someone</li>
					<li>Someone else</li>
				</ul>
			</div>
			<div class="column repos-wrapper">
				<h2 class="column-title">Repositories</h2>
				<ul class="repos-list">
					<li>Something</li>
					<li>Something else</li>
				</ul>
			</div>
			<div>
				<h2 class="column column-title">Starred</h2>
				<ul class="starred-list">
					<li>Something</li>
					<li>Something else</li>
				</ul>
			</div>
		</div>
	</main>
	<Footer />
</div>

<style>
	.content-wrapper {
		height: 100%;
		width: 100%;
		display: grid;
		grid-template-rows: 1fr 12fr 1fr;
		row-gap: 10px;
		align-items: center;
	}
</style>
