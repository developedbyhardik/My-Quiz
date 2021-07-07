
<script>
    import Viewport from 'svelte-viewport-info'
    import Starter from './screens/Starter.svelte'
    import Quiz from './screens/Quiz.svelte'
    import {
        isStart
    } from './store/Store.js'

</script>

<div class='container' style={`min-height:${Viewport.Height-1}px;`}>
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
</div>
    


<style>
.container{
    margin: 0;
    padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  z-index: 10;
  resize: vertical;
}
    .App{
        background: var(--main);
        width: clamp(350px , 45vw , 600px);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-2);
        border: var(--border);
        margin: 2rem 0;
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
