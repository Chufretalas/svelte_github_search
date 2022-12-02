<script lang="ts">
	import type IUserSimple from "$lib/interfaces/IUserSimple";
	export let user: IUserSimple;
</script>

<a href={user.profile_url} target="_blank" rel="noopener noreferrer" class="card-wrapper">
        <div class="name-section">
            <h3 class="nickname">User: {user.nickname}</h3>
            {#if user.name}
                <h4 class="normal-name">Name: {user.name}</h4>
            {/if}
        </div>
        <img src={user.avatar_url} alt="{user.nickname} avatar" class="profile-image">
</a>

<style>
    .card-wrapper{
        max-height: 12vh;
        min-height: 10vh;
        width: 90%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: var(--primary-color);
        border-radius: 20px;
        padding: 0 6%;
        border: 3px solid var(--blue-color);
    }
    .nickname {
        font-size: 1rem;
    }
    .profile-image{
        max-height: 85%;
        border-radius: 1000px;
    }

    @media screen and (max-width: 600px) {
		.card-wrapper {
            min-height: 20vh;
            max-height: 24vh;
            max-width: 75%;
        }
        .nickname {
			font-size: 1.4rem;
        }
	}
</style>