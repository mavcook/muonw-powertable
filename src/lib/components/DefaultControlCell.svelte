<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    
    import { editCommit, isEditingRow, pendingRowEdits, type PTCellReferences } from "./PowerTable.svelte";
    
    export let ptCellReferences: PTCellReferences;

    $: isEditing = $isEditingRow[ptCellReferences.rowId]

    function confirm(e: Event) {
        ptCellReferences.submitEdits({eventName: 'idk'}, ptCellReferences.rowId)
    }
    function discard() {
        ptCellReferences.submitEdits({eventName: 'discard'}, ptCellReferences.rowId)
    }

</script>



{#if isEditing}
<button on:click={discard}>X</button>
<button on:click={confirm}>✔️</button>
{:else}
<button on:click={() => $isEditingRow[ptCellReferences.rowId] = true}>✎</button>
{/if}
