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

    <button on:click={()=>isStart.set(true)}>Start Quiz</button>
</div>
