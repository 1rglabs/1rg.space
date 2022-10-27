<script lang="ts">
	import { browser } from '$app/environment';
	import XButton from '$lib/components/XButton.svelte';
	import { fly } from 'svelte/transition';

	let innerWidth: number;
	export let open = false;

	$: if (browser) document.body.classList.toggle('overflow-hidden', open);
</script>

<svelte:window bind:innerWidth />

{#if open}
	<div
		class="fixed top-0 left-0 z-10 w-screen h-screen overflow-hidden bg-mediumorchid"
		transition:fly={{ opacity: 100, x: innerWidth, duration: 800 }}
	>
		<XButton on:click={() => (open = false)} class="absolute top-0 right-0" />
	</div>
{/if}
