<script lang="ts">
	import Modal from "./modal.svelte";
	import { PUBLIC_API_URL } from "$env/static/public";

	const { currentSong }: { currentSong: Song | undefined } = $props();

	let lyric = $state("");

	let lyricId = "";

	let showModal = $state(false);

	let isLoading = $state(true);

	const getLyric = async () => {
		if (
			!currentSong ||
			!currentSong.lyric_id ||
			lyricId == currentSong.lyric_id
		)
			return (isLoading = false);

		lyricId = currentSong.lyric_id;

		console.log("get lyric");

		const res = await fetch(`${PUBLIC_API_URL}/lyrics/${lyricId}`);
		const payload = (await res.json()) as { data: SongLyric };

		lyric = payload.data.base;

		isLoading = false;
	};

	$effect(() => {
		if (!showModal) {
			isLoading = true;
			return;
		}

		getLyric();
	});
</script>

<button onclick={() => (showModal = true)} class="fixed bottom-10 right-10">
	<img class="w-6" src="./icons/list.png" alt="hehe" />
</button>

<Modal bind:showModal>
	{#snippet header()}
		<h2>Lyric {currentSong?.name}</h2>
	{/snippet}

	<div class="w-[80vw] max-w-[500px] whitespace-pre-line leading-loose">
		{isLoading ? "loading" : lyric || '...'}
	</div>
</Modal>
