<script lang="ts">
	const handleClick = () => {
		const activeEle = document.querySelector(`button[data-active=true]`);

		if (activeEle)
			activeEle.scrollIntoView({
				block: "start",
				behavior: "instant",
			});
	};
</script>

<button onclick={handleClick} class="fixed bottom-10 right-20">
	<img class="w-6" src="./icons/music_note.png" alt="hehe" />
</button>
