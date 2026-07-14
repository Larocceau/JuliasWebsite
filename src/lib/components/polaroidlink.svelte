<script lang="ts">
    import type { Snippet } from "svelte";

    let {
        title,
        src,
        href
    }: { title?: string; src: string ; href: string } = $props();
</script>

<a {href}>
    <img {src} alt="" />
    <p>{title}</p>
</a>

<style>
    a, img {
        max-width: 100%;
    }
    p {
        position: absolute;
        bottom: 5%;
    }
    
</style>