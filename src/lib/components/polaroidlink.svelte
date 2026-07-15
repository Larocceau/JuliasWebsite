<script lang="ts">
    import type { Picture } from "@sveltejs/enhanced-img";

    let {
        title,
        src,
        href,
        rotation = 0,
    }: {
        title?: string;
        src: Picture;
        href?: string;
        rotation?: number;
    } = $props();
</script>

<div class="wrapper" style="rotate:{rotation}deg">
    {#if href}
        <a {href}>
                <enhanced:img {src} alt="" class="image"/>
                <div class="handle">
                    <p>{title}</p>
                </div>
        </a>
    {:else}
        <enhanced:img {src} alt="" class="image" />
        <div class="handle">
            <p>{title}</p>
        </div>
    {/if}
</div>

<style>
    .wrapper {
        max-width: 100%;
        position: relative;
        display: inline-block;
    }
    .image {
        max-width: 100%;
        display: block;
        height: auto;
    }
    .handle {
        position: absolute;
        width: 100%;
        text-align: center;
        text-justify: distribute;
        height: 20%;
        bottom: 0px;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    p {
        margin: 0%;
        font-family: "Playfair Display Variable", serif;
        font-style: italic;
    }
</style>
