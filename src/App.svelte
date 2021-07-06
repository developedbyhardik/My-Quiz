<script>
    import Starter from './screens/Starter.svelte'
    import Quiz from './screens/Quiz.svelte'
    import {
        isStart
    } from './store/Store.js'
</script>

<div class='container'>
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
  min-height: 100vh;
  width: 100vw;
  background-color: rgb(218, 97, 157);
  z-index: 10;
}
    .App{
        background: var(--white);
        width: clamp(350px , 45vw , 600px);
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-2);
        border: 2px solid black;
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
