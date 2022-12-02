<footer>
	<span>
		Made by <a
			href="https://github.com/Chufretalas/svelte_github_search"
			target="_blank"
			rel="noopener noreferrer"
		>
			Chufretalas
		</a> - 2022
	</span>
</footer>

<style>
    footer {
        justify-self: center;
        align-self: flex-end;
        height: 50%;
        width: 30%;
        background-color: var(--primary-color-darker);
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
		box-shadow: 0px 0px 8px var(--blue-color);
    }

    footer span {
        margin: auto;
    }

    @media screen and (max-width: 600px) {
		footer {
            height: 1rem;
            width: 50%;
            margin-top: 10px;
        }
	}
</style>