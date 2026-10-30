<script lang="ts">
	let { showModal = $bindable(), header, children } = $props();

	let dialog = $state<HTMLDialogElement>(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog && dialog.showModal();
	});
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	class="bg-transparent overflow-hidden"
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog.close();
	}}
>
	<div class="px-3 py-4 rounded-lg bg-white flex flex-col overflow-hidden">
		<div class="flex justify-between">
			{@render header?.()}
			<!-- svelte-ignore a11y_autofocus -->
			<button class="p-1.5" autofocus onclick={() => dialog && dialog.close()}
				><img class="w-4" src="./icons/x.png" alt="sdf" /></button
			>
		</div>
		<hr />

		<div class="flex-grow overflow-auto max-h-[80vh]">
			{@render children?.()}
		</div>
	</div>
</dialog>
