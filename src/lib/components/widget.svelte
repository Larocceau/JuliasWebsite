<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        children,
    }: {
        children: Snippet;
    } = $props();
</script>

<section >

    {@render children()}
</section>

<style>
    section {
        border-radius: 30px;
        padding: 20px;
        max-width: 800px;
        background-color: var(--color-detail);
        color: white;
    }

    h2 {
        margin-top: 0px;
        font-family: "Playfair Display Variable", cursive;
    }
</style>
