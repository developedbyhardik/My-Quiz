<script>
    import Starter from './screens/Starter.svelte'
    import Quiz from './screens/Quiz.svelte'
    import {isStart} from './store/Store.js'
</script>

<div>
<h1>My Quiz</h1>
    {#if $isStart}
        <Quiz/>
    {:else}
        <Starter />
    {/if}
</div>