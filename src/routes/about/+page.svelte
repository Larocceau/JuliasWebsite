<script lang="ts">
    import Polaroidlink from "$lib/components/polaroidlink.svelte";
    import SignupForm from "$lib/components/signupForm.svelte";

    import localDelicaties from "$lib/assets/polaroids/food/food tour 2.png?enhanced";
    import market from "$lib/assets/polaroids/best_of/both_3.png?enhanced";
    import hiddenGems from "$lib/assets/polaroids/contact us.jpg?enhanced";
    import Contentblock from "$lib/components/contentblock.svelte";
    import Widget from "$lib/components/widget.svelte";
</script>

<div class="content-and-shizzle">
    <div>
        <Contentblock>
            <p>
                My name is Julia Cottrell, and I founded Shepherd Tours because
                I love The Hague. I want to be the person who helps you, your
                employees, guests, and families find their footing in this new
                city.
            </p>
            <p>
                I’ve led tours for individuals, families, groups, companies,
                schools, universities, and cruise groups in both London and The
                Hague. I’m excited for the opportunity to work with you next!
            </p>
            <p>
                I’ve been giving tours in an official capacity since 2017. My
                first tours were as a student ambassador at University College
                Roosevelt in Middelburg, Netherlands. I gave tours of the
                campus, student residents, and the city for three years until I
                graduated in 2020.
            </p>
            <p>
                I dreamed of a job where I could move around all day and teach
                people fun facts, but didn’t know how to find one or even what
                to look for! So instead, I moved to London in 2023 and completed
                a Master’s in Medical Anthropology and Mental Health at the
                School of Oriental and Asian Studies (SOAS) instead.
            </p>
            <p>
                In 2025 I was approached by the owner of Totally Tailored, who
                offered me the opportunity to try out for the role of tour
                guide. Once I got the job, I left the world of office work,
                walked into tour guiding, and never went back.
            </p>
        </Contentblock>
    </div>

    <div class="side-bar">
        <Polaroidlink src={hiddenGems} title={"Julia, Founder"} rotation={3}
        ></Polaroidlink>
        <Widget>
            <p>Some fun facts about me:</p>
            <p>
                I love fries with mayo, and do not have the same fondness for
                herring!
            </p>
            <p>
                My favourite honey is from Imker Clingendael, gathered on the
                last existing farm in The Hague
            </p>
            <p>
                I have a rescue dog called Andy, named after the police officer
                in Twin Peaks
            </p>
        </Widget>
    </div>
</div>

<style>
    .content-and-shizzle {
        display: grid;
        grid-template-columns: 1fr 300px;
        gap: 20px;
        width: 100%;
        align-content: start;
    }

    .side-bar {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media (max-width: 600px) {
        .content-and-shizzle {
            grid-template-columns: 1fr;
        }

        .side-bar {
            flex-direction: column-reverse;
        }
    }
</style>
