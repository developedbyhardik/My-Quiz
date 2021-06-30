<script>
    import Starter from './screens/Starter.svelte'
    import Quiz from './screens/Quiz.svelte'
    import {
        isStart
    } from './store/Store.js'
</script>


    <div class='App'>
        <div class="title">
            <h1>My Quiz</h1>
        </div>
        {#if $isStart}
            <Quiz/>
        {:else}
        <div class="starter">
            <Starter />
        </div>
        {/if}
    </div>


<style>

    .App{
        background: rgb(255, 255, 255);
        max-width: 700px;
        margin: 0 auto;
        min-height: 90vh;
        margin-top: 5vh;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-2);
    }
    .title{
        font-family: var(--bodyFont);
        text-align: center;
    }
    .starter{
        margin: 0 auto;
        width: 400px;
    }
</style>