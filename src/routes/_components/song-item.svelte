



<script lang="ts">


	type Props= {song: Song, setSong: () => void}

	const {song, setSong} :Props = $props()
	
</script>



<p>
<button onclick={setSong}>{song.name}</button>
</p>