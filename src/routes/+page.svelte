<script lang="ts">
	import SongItem from "./_components/song-item.svelte";

	let { data } = $props();

	let index = $state<number>();

	let currentSong = $derived(!!index && (data.songs || [])[index]);

	const setSong = (v: number) => {
		index = v;
	};

	$effect(() => {
		index = +(localStorage.getItem("index") || "") || 0;
	});
</script>

<audio
	onloadedmetadata={(event) => {
		(event.target as HTMLAudioElement).play();
		localStorage.setItem("index", index + "");
	}}
	onended={() => !!index && (index += 1)}
	src={currentSong ? currentSong.song_url : ""}
	controls
></audio>

<div class="pt-10">
	{#each data.songs as song, i (song.id)}
		<SongItem setSong={() => setSong(i)} {song} />
	{/each}
</div>
