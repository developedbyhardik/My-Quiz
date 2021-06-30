<script>
    import Starter from './screens/Starter.svelte'
    import Quiz from './screens/Quiz.svelte'
    import {
        isStart
    } from './store/Store.js'
</script>


    <div class='App'>
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
        max-width: clamp(350px , 45vw , 650px);
        margin: 5vh auto;
        min-height: calc(90vh - 1%);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-2);
    }
 
    .starter{
        padding: 2rem;
        margin: 0 auto;
        width: cal(400px - 1%);
    }
</style>