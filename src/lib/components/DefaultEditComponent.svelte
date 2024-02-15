<script lang="ts">
import { createEventDispatcher } from 'svelte';

import { editCommit, pendingRowEdits, type PTCellReferences } from "./PowerTable.svelte";

export let ptCellReferences: PTCellReferences;

let originalCellValue = JSON.parse(JSON.stringify(ptCellReferences.cellValue))
let isDirty = false


editCommit.subscribe((event) => {
	if (event?.eventName === 'discard' && event?.rowId===ptCellReferences.rowId) {
		ptCellReferences.cellValue = originalCellValue
		return
	}

	if (event && isDirty){ // if event.blah == blah, i should submit my changes
		// console.log(event, row, 'staging', value)

		$pendingRowEdits[ptCellReferences.rowId][ptCellReferences.instructKey] = ptCellReferences.cellValue

	}

})


function adjustHeight(node: HTMLElement) {
	node.style.height = node.scrollHeight + 'px';
}


</script>

<div data-name="edit-block">
	<label>
		<span>
			<span>{ptCellReferences.instructTitle}</span>
		</span>
		<textarea data-name="edit-input" data-key={ptCellReferences.instructKey} use:adjustHeight bind:value={ptCellReferences.cellValue} on:change={() => {console.log('asdfasdfasdf'), isDirty=true}}></textarea>
	</label>
</div>
