<script lang="ts">
    import { page } from "$app/state";
    let pages: [string, string, [string, string][]?][] = [
        ["/", "Home"],
        [
            "/tours",
            "Discover",
            [
                ["/tours/best_of", "Best of The Hague Tour"],
                ["/tours/food", "Food Tour"],
                ["/tours/newcomers", "Newcomers Tour"],
                ["/tours/drinks", "Beer and Spirits Tour"],
                ["/tours/politics", "Politics Tour"],
                ["/tours/royals", "Royal Family Tour"],
                ["/tours/laak", "Laakkwartier Tour"],
            ],
        ],
    ];

    let highlighted = $derived((path: string) => {
        return (
            page.url.pathname == path ||
            (path != "/" && page.url.pathname.includes(path))
        );
    });
</script>

<nav>
    {#each pages as whateverPage}
        <div class={highlighted(whateverPage[0]) ? "marker item" : "item"}>
            <a href={whateverPage[0]}>{whateverPage[1]} </a>

            {#if whateverPage[2]}
                <div class="subnav-hitbox">
                    <div class="subnav">
                        {#each whateverPage[2] as subpage}
                            <div
                                class={page.url.pathname == subpage[0]
                                    ? "marker"
                                    : ""}
                            >
                                <a href={subpage[0]}>{subpage[1]} </a>
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
    {/each}
</nav>

<style>
    nav,
    .subnav {
        background-color: var(--color-primary);
        color: var(--color-secondary);
        padding: 20px;
        border-radius: 20px;
        font-weight: bold;
    }

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        z-index: 10;
    }

    nav > div {
        position: relative;
    }

    .subnav-hitbox {
        position: absolute;
        top: calc(100%);
        display: none;
        left: 50%;
        transform: translateX(-50%);
        height: fit-content;
    }

    .subnav {
        flex-direction: column;
        gap: 6px;
        display: flex;
        margin-top: 20px;
        border: 2px solid var(--color-secondary);
    }

    .item:hover .subnav-hitbox {
        display: flex;
    }

    .subnav-hitbox:hover {
        display: flex;
    }

    a {
        color: inherit;
        text-decoration: none;
        width: 100%;
        text-align: center;
        display: block;
    }

    nav > div,
    .subnav > div {
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
