<script lang="ts">
	import type IRepo from "$lib/interfaces/IRepo";
	export let repo: IRepo;
</script>

<a href={repo.url} target="_blank" rel="noopener noreferrer" class="card-wrapper">
	<h3 class="name">{repo.name}</h3>
    <span>{repo.language ?? "No language"} | {repo.license ?? "No license"}</span>
    <p>{repo.description ?? ""}</p>
</a>

<style>
	.card-wrapper {
		max-height: 25vh;
		min-height: 18vh;
		width: 95%;
		box-sizing: border-box;
		display: flex;
        flex-direction: column;
		justify-content: space-between;
		align-items: center;
		background-color: var(--primary-color);
		border-radius: 20px;
		padding: 2% 6%;
		border: 3px solid var(--blue-color);
        font-size: 0.8rem;
        overflow: hidden;
        overflow-wrap: break-word;
	}
	.name {
		font-size: 1.1rem;
        overflow: hidden;
        overflow-wrap: break-word;
	}

	@media screen and (max-width: 600px) {
		.card-wrapper {
            min-height: 30vh;
            max-height: 35vh;
            max-width: 80%;
			font-size: 1.3rem;
        }
		.name {
			font-size: 1.4rem;
			font-weight: 800;
			text-decoration: underline;
		}
	}
</style>
