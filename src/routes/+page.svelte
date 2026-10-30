<script lang="ts">
	import Lyric from "./_components/lyric.svelte";
	import ShowActive from "./_components/show-active.svelte";
	import SideScroll from "./_components/side-scroll.svelte";
	import SongItem from "./_components/song-item.svelte";

	let { data } = $props();

	let index = $state<number>();
	let init = $state(false);

	let currentSong = $derived(
		index != undefined ? (data.songs || [])[index] : undefined,
	);

	const setSong = (v: number) => {
		index = v;
	};

	$effect(() => {
		index = +(localStorage.getItem("index") || "") || 0;
	});
</script>

<svelte:head>
	<title>{currentSong?.name || "hehe"}</title>
</svelte:head>

<audio
	class="sticky top-1"
	onloadedmetadata={(event) => {
		if (!init) {
			return (init = true);
		}
		(event.target as HTMLAudioElement).play();
		localStorage.setItem("index", index + "");
	}}
	onended={() => index != undefined && (index += 1)}
	src={currentSong ? currentSong.song_url : ""}
	controls
></audio>

<div class="pt-10 space-y-2 pl-2 pb-[50%]">
	{#each data.songs as song, i (song.id)}
		<SongItem
			active={currentSong?.id == song.id}
			setSong={() => setSong(i)}
			{song}
		/>
	{/each}
</div>

<SideScroll />

<ShowActive />
<Lyric {currentSong} />
