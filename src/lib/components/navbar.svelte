<script lang="ts">
    import { page } from "$app/state";
    let pages: [string, string][] = [
        ["/", "Home"],
        ["/tours", "Discover"],
        ["/tours/best_of", "Best Of the Hague"],
    ];

    console.log(page.url.pathname);
</script>

<nav>
    {#each pages as whateverPage}
        <div class={page.url.pathname == whateverPage[0] ? "marker" : ""}>
            <a href={whateverPage[0]}>{whateverPage[1]} </a>
        </div>
    {/each}
</nav>

<style>
    nav {
        background-color: var(--color-primary);
        color: var(--color-secondary);
        padding: 20px;
        border-radius: 20px;
        font-weight: bold;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    a {
        color: inherit;
        text-decoration: none;
        width: 100%;
        text-align: center;
        display: block;
    }

    div {
        width: 100px;
        padding: 5px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .marker {
        background-color: var(--color-detail);
        border-radius: 10px;
    }
</style>
