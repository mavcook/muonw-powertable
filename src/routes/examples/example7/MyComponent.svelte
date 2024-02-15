<script lang="ts">
		import type { PTCellReferences } from "$lib";
	import { checkboxKey, editCommit, pendingRowEdits } from '$lib/components/PowerTable.svelte';
import { createEventDispatcher } from 'svelte';

export let ptCellReferences: PTCellReferences;


let { instructKey, instructTitle, cellValue, rowIndex, rowId, row } = ptCellReferences;


export let selectValues: string[];

const dispatch = createEventDispatcher();





editCommit.subscribe((event) => {
	if (event){ // if event.blah == blah, i should submit my changes
		console.log('selectdropdown: staging', event, row, cellValue)
		$pendingRowEdits[rowId][instructKey] = cellValue
	}
})


function confirm(e: Event) {
	ptCellReferences.submitEdits({eventName: 'sbumit from cell'}, rowId)
}

</script>

<div data-name="edit-block">
	<label>
		<span>
			<span>{instructTitle}</span>
		</span><select bind:value={cellValue}>
			{#each selectValues as anOption}
				<option value={anOption} selected={anOption == cellValue}>
					{anOption}
				</option>
			{/each}
		</select>
	</label>
	<button data-name="edit-submit" on:click={confirm}>✔️</button>
</div>
