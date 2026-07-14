<script lang="ts">
    import type { Snippet } from "svelte";

    let { children, title } : {title?: string, children: Snippet}= $props();


</script>


<section>
    {#if title}
    <h2>{title}</h2>
    {/if}

    {@render children()}

</section>

<style>
section {
    background-color: #5e8c7f;
    color: white;
    border-radius: 30px;
    padding: 20px;
    max-width: 800px;
    text-align: center;
}

h2 {
    margin-top: 0px;
    font-family: "Playfair Display Variable", cursive;
}

</style>