<script lang="ts">
	import { browser } from '$app/environment';
	import XButton from '$lib/components/XButton.svelte';

	export let open = false;

	$: if (browser) document.body.classList.toggle('overflow-hidden', open);
</script>

{#if open}
	<div class="fixed top-0 left-0 z-10 w-screen h-screen overflow-hidden bg-mediumorchid">
		<XButton on:click={() => (open = false)} class="absolute top-0 right-0"/>
	</div>
{/if}
