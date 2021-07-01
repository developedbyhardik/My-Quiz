<script>
    import DropDown from '../components/DropDown.svelte';
    import {
        NumberOfQuestion,
        SelectCategory,
        SelectDifficulty,
        SelectType
    } from '../data/StarterData.js';

    import {
        amount,
        category,
        difficulty,
        type
    } from '../store/Store.js';

    import {isStart} from '../store/Store.js'

</script>

<div>
    <div class="title">
        <h1>My Quiz</h1>
    </div>
    <DropDown options={NumberOfQuestion} on:amount={(event)=>amount.update
        ((n)=>
        {return {...n,value:event.detail.selected}}

        )} />
    <DropDown options={SelectCategory} on:category={(event)=>category.update((n)=>
        {return {...n,value:event.detail.selected}}

        )}  />
    <DropDown options={SelectDifficulty} on:difficulty={(event)=>difficulty.update((n)=>
        {return {...n,value:event.detail.selected}}

        )} />
    <DropDown options={SelectType} on:type={(event)=>type.update((n)=>
        {return {...n,value:event.detail.selected}}

        )}  />
    <img as='button' alt='Start' src="/Assets/start.svg" class="start" on:click={()=>isStart.set(true)} />
</div>

<style>
       .title{
        font-family: var(--bodyFont);
        text-align: center;
        padding-top: 2rem;
    }
    .start{
        width: 3.7rem;
        padding:12px 0;
        font-size: 1rem;
        margin: 0 auto;
        cursor: pointer;
    }
</style>
