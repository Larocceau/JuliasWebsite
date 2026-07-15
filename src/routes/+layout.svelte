<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";
    import dogLogo from "$lib/assets/dog_logo.png";
    import dogLogoSecondary from "$lib/assets/dog_logo_secondary.png";

    let { children } = $props();
    let year = `${(new Date().getFullYear())}`;

</script>

<svelte:head>
    <link rel="stylesheet" href="/fonts.css" />
</svelte:head>

<header>
	<div class="header-content">
        <h1 class="logo-text">Shepherd Tours</h1>
        <img src={dogLogo} alt="Shepherd logo" />
	</div>
	<section class="banner">
		Private tours showing the highlights of The Hague and all the secrets in
		between
	</section>
	<!-- <Navbar/> -->
</header>
<main>
	{@render children()}
</main>

<footer>
	<p class="logo-text">
        Shepherd tours <img alt="Shepherd Tour's logo" src={dogLogoSecondary} />
	</p>
	<section>
		<h3>Contact us</h3>
		Telephone: <a href="tel:+31644984571">+31 6 44 98 45 71</a><br />
		Email: <a href="mailto:book@shepherdtours.nl">book@shepherdtours.nl</a><br />

		KvK No: 42071036<br />
		<p class="uppercase">All Rights Reserved {year}</p>
	</section>
</footer>


<style>



header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 20px;
}

header img {
    height: 120px;
}


.header-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}


.logo-text {
    font-size: 72px;
    font-weight: bold;
    margin: 0;
    line-height: 1.1;
    text-transform: uppercase;
    font-family: "Playfair Display Variable";
    overflow: hidden;
}

 @media(max-width: 600px) {.logo-text {
    font-size: 60px

}}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
	padding: 10px;
    gap: 25px;
    max-width: 1250px;
}



.banner {
    font-family: "Playfair Display Variable", serif;
    font-style: italic;
    font-size: x-large;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
}


footer {
    box-sizing: border-box;
    background-color: var(--color-primary);
    color: var(--color-secondary);
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}

footer img {
    height: 72px;
}

footer .logo-text {
    flex-shrink: 1;
    overflow:hidden;
}

.uppercase {
	text-transform: uppercase;
}

a {
	color: inherit;
}



</style>