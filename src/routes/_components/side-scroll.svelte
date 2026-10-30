<script lang="ts">
	const letters = [...Array(26).keys()].map((n) => String.fromCharCode(n + 65));

	const handleClick = (letter: string) => {
		const firstElement = document.querySelector(
			`button[data-first_letter=${letter.toLowerCase()}]`,
		);

		if (firstElement)
			firstElement.scrollIntoView({
				block: "start",
				behavior: "instant",
			});
	};

	const handleKeyboardPress = (e: KeyboardEvent) => {
		const isLetterOrNumber = /^[a-zA-Z0-9]$/;
		if (isLetterOrNumber.test(e.key)) {
			handleClick(e.key);

		}
	};

	$effect(() => {
		window.addEventListener("keypress", handleKeyboardPress);

		return () => {
			window.removeEventListener("keypress", handleKeyboardPress);
		};
	});
</script>

<div
	style="touch-action: none;"
	class="fixed right-2 top-0 [&_button]:block [&_button]:p-0.5"
>
	{#each letters as letter}
		<button onclick={() => handleClick(letter)}>{letter}</button>
	{/each}
</div>
