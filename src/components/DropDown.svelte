<script>
    import {createEventDispatcher} from 'svelte'
export let options;

const dispatch = createEventDispatcher();

function selected(event) {
    dispatch(options[0].value, {
			selected:event.target.value
		});
}
</script>

<div>
    <select on:change={selected}>
        {#each options as option}
        <option value={option.value}>
            {option.title}
        </option>
        {/each}
    </select>
</div>
