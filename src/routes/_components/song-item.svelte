<script lang="ts">
	type Props = { song: Song; setSong: () => void };

	const { song, setSong }: Props = $props();

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

<p>
	<img class="size-4 inline-block" src="./icons/music_note.png" alt="sdf" />
	<button
		class="song-item"
		data-first_letter={normalVietnamese(song.name.charAt(0))}
		onclick={setSong}>{song.name}</button
	>
</p>
