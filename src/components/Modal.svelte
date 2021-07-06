<script>
    import {resetAll} from '../store/Store.js'
    import {elasticOut} from 'svelte/easing'

</script>

<div class="modal-bg" >
    <div class="modal">
        <button on:click={resetAll}><img src="Assets/cancel.png" alt="close"></button>
        <slot/>
    </div>
    
</div>

<style>
    .modal-bg{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        display: grid;
        justify-items: center;
        align-items: center;
        z-index: 20;
    }
    .modal{
        position: relative;
        background: var(--background);
        padding: 20px;
        border-radius: 15px;
        font-family: var(--bodyFont);
        font-weight: bold;
        width: clamp(350px , 45vw , 600px);
        border: var(--border);
    }

    button{
        --size:30px;
        border: none;
        width: var(--size);
        height: var(--size);
        position: absolute;
        right: 0;
        top: calc(var(--size) / 2 * -2.5);
    }
</style>