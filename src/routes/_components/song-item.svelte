<script lang="ts">
	type Props = { song: Song; setSong: () => void; active?: boolean };

	const { song, setSong, active }: Props = $props();

	const normalVietnamese = (letter: string) => {
		let str = letter
			.normalize("NFD")
			// Remove diacritic marks
			.replace(/[\u0300-\u036f]/g, "");

		// Replace special Vietnamese characters Đ and đ
		str = str.replace(/Đ/g, "D").replace(/đ/g, "d");

		return str.toLowerCase();
	};
</script>

<p class="mr-3">
	{#if active}
		<img class="size-4 inline-block" src="./icons/music_note.png" alt="sdf" />
	{:else}
		<span class="w-4 inline-block"></span>
	{/if}
	<button
		data-active={active}
		class="song-item"
		data-first_letter={normalVietnamese(song.name.charAt(0))}
		onclick={setSong}>{song.name}</button
	>
</p>
