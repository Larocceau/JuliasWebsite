<script lang="ts">
    let { children, title } = $props();


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
    padding: 10px;
    max-width: 800px;
    text-align: center;

}

h2 {
    margin-top: 0px;
}
</style>