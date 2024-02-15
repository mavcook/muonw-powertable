<script lang="ts">

	import type { PTCellReferences } from "./PowerTable.svelte";

    export let ptCellReferences: PTCellReferences;

</script>

{#if typeof(ptCellReferences.cellValue) === 'object'}
    {JSON.stringify(ptCellReferences.cellValue)}
{:else}
    {ptCellReferences.cellValue}
{/if}
