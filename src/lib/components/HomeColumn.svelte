<script lang="ts">
	export let columnTitle: string;
</script>

<div class="column">
	<h2 class="column-title">{columnTitle}</h2>
	<hr />
	<ul class="column-list">
		<slot />
	</ul>
</div>

<style>
	.column {
		display: grid;
		grid-template-rows: 1fr 0.2fr 20fr;
		justify-content: center;
		width: 30%;
		background-color: var(--secondary-color-darker);
		border-radius: 20px;
		border: 2px solid var(--accent-color);
		padding: 10px;
		box-sizing: border-box;
	}

	hr {
		border: 0;
		clear: both;
		display: block;
		width: 96%;
		background-color: var(--accent-color);
		height: 1px;
	}

	.column-title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 800;
	}

	.column-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-height: 65vh;
		width: 18vw;
		overflow-x: hidden;
		overflow-y: auto;
		row-gap: 10px;
	}

	@media screen and (max-width: 600px) {
		.column {
			width: 90%;
			align-self: center;
			height: 100vh;
		}

		.column-list {
			width: auto;
			max-height: none;
		}
	}
</style>
