<script>
    import Starter from './screens/Starter.svelte'
    import Quiz from './screens/Quiz.svelte'
    import {
        isStart
    } from './store/Store.js'
</script>


    <div class='App'>
        {#if $isStart}
        <div class="quiz">
            <Quiz/>
        </div>
        {:else}
        <div class="starter">
            <Starter />
        </div>
        {/if}
    </div>


<style>

    .App{
        background: rgb(255, 255, 255);
        min-width: clamp(350px , 45vw , 650px);
        min-height: 90vh;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-2);
    }
 
    .starter{
        padding: 2rem;
        margin: 0 auto;
        min-width: 400px;
    }

    .quiz{
        max-width: clamp(350px , 45vw , 650px);
    min-height: 90vh;
}
</style>