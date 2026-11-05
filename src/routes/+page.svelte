<script lang="ts">
    import Player from './_components/player.svelte';
	let { data } = $props();
</script>

{#await data.stream}
    <div class="spinner">
        <p>Loading...</p>
    </div>
{:then resolvedData}
   <Player songs={resolvedData.data}  />
{:catch error}
    <p style="color: red;">Failed to load data: {error.message}</p>
{/await}