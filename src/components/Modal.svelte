<script>
    import {resetAll} from '../store/Store.js'
</script>

<div class="modal-bg" on:click={resetAll}>
    <div class="modal">
        <button on:click={resetAll}>Close</button>
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
        background: rgba(0, 0, 0, 0.5);
    }
    .modal{
        background: white;
        padding: 20px;
        border-radius: 15px;
    }
</style>