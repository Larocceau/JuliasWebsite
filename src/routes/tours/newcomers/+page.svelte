<script>
    import Tourpage from "$lib/components/tourpage.svelte";
    import picture1 from "$lib/assets/polaroids/newcomers/nt_1.png?enhanced";
    import picture2 from "$lib/assets/polaroids/newcomers/photo3.png?enhanced";
    import picture3 from "$lib/assets/polaroids/newcomers/nt_3.png?enhanced";
</script>

<Tourpage
    preselection="Newcomers Tour"
    pretitle="Private Walking Tour"
    title="Newcomers Tour"
    price="€300 flat per hour + €20 per person"
    images={[
        {
            picture: picture1,
            description: "Feel at Home",
        },
        {
            picture: picture2,
            description: "Make New Friends",
        },
        {
            picture: picture3,
            description: "Familiar Shopping",
        },
    ]}
>
    <p>
        The cost for a 3 hour tour is <b
            >€300 per tour, + €20 per person aged 3+.</b
        > This includes food and drink at the scheduled locations.
    </p>
    <p><b>This tour is not available on Mondays. </b></p>
    <p>This tour includes:</p>
    <ul>
        <li>A showcase of the secret spots that make you feel at home</li>
        <li>
            A break at both a Dutch and tailored home country style pub, cafe,
            or restaurant
        </li>
        <li>
            Focus on shops and organisations that are affiliated with your home
            country
        </li>
        <li>The option to add tickets to museums of your choosing</li>
    </ul></Tourpage
>
