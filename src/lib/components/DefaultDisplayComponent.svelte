<script lang="ts">
    export let instructKey: number;
    export let instructTitle: string;
    export let value: string;
    export let rowIndex: number;
    export let rowId: number;
</script>

{#if typeof(value) === 'object'}
{JSON.stringify(value)}
{:else}
{value}
{/if}
