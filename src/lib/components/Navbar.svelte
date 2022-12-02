<script lang="ts">
	import { placeholderUser } from "$lib/constants";
	import type IUser from "$lib/interfaces/IUser";

	export let user: IUser | undefined;
	if (!user) {
		user = placeholderUser;
	}
	user as IUser;
</script>

<nav>
	<div class="active-user-wrapper">
		<img src={user?.avatar_url} alt="" class="active-user-avatar" />
		<span class="active-user-nickname">{user?.nickname}</span>
	</div>
	<form method="POST" action="?/searchUser" class="search-form">
		<input
			type="text"
			name="nickname"
			id="nickname-input"
			placeholder="Type a user nickname here"
		/>
		<button class="search-button">Search</button>
	</form>
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		height: 12vh;
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 40px;
		padding: 0 20vw;
		background-color: var(--primary-color-darker);
		box-shadow: 0px 0px 15px black;
	}

	.active-user-wrapper {
		display: inherit;
		align-items: center;
		column-gap: 10px;
	}

	.active-user-wrapper img {
		height: 10vh;
		border-radius: 1000px;
	}

	.active-user-wrapper span {
		font-size: 1.5rem;
		font-weight: 800;
	}

	.search-form {
		display: inherit;
		align-items: center;
		justify-content: center;
		column-gap: 5px;
	}

	.search-form input {
		border-radius: 10px;
		border: 3px solid var(--blue-color);
		height: 6vh;
		padding: 3px 5px;
		font-size: 1.2rem;
	}

	.search-form input::placeholder {
		font-size: 0.9rem;
	}

	.search-form button {
		border-radius: 10px;
		border: 3px solid var(--accent-color);
		height: 6vh;
		padding: 2px 5px;
		background-color: var(--secondary-color-darker);
		color: var(--text-color);
		font-size: 1.2rem;
		transition: all 200ms;
	}

	.search-form button:hover {
		cursor: pointer;
		height: 7vh;
	}

	@media screen and (max-width: 600px) {
		nav {
			flex-direction: column;
			height: 25vh;
			justify-content: space-around;
		}
		.search-form input {
			min-width: 60vw;
			min-height: 2rem;
		}
		.search-form button {
			min-height: 2rem;
		}
	}
</style>
