<script lang="ts">
    import Player from "./_components/player.svelte";
    let { data } = $props();
</script>

<div class="p-2 scale-125 origin-left">
    <iframe
        title="hehe"
        style="border:none;"
        width="100%"
        height="20"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2258113544&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
    ></iframe>
    <p class="mt-1"></p>
    <iframe
        title="hehe"
        style="border:none;"
        width="100%"
        height="20"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2017879049&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"
    ></iframe>
</div>

<br />

{#await data.stream}
    <div class="spinner">
        <p>Loading...</p>
    </div>
{:then resolvedData}
    <Player songs={resolvedData.data} />
{:catch error}
    <p style="color: red;">Failed to load data: {error.message}</p>
{/await}
