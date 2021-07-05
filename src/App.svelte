<script>
    import Starter from './screens/Starter.svelte'
    import Quiz from './screens/Quiz.svelte'
    import {
        isStart
    } from './store/Store.js'
</script>

<body>
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
</body>
    


<style>

    .App{
        background: rgb(153, 129, 129);
        width: clamp(350px , 45vw , 600px);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-2);
        border: 2px solid black;
        margin: 2rem auto;
    }
 
    .starter{
        padding: calc(1.7rem + 1%);
        margin: 0 auto;
        min-width: calc(350px - 1%);
    }

    .quiz{
        max-width: clamp(350px , 45vw , 600px);
}

    
</style>