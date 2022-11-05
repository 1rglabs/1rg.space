<script lang="ts">
	import { browser } from '$app/environment';
	import XButton from '$lib/components/XButton.svelte';
	import logo from '$lib/images/1rg_logo.svg';
	import { fly } from 'svelte/transition';

	let innerWidth: number;
	export let open = false;

	// Make the page not scroll if the menu is open
	$: if (browser) document.body.classList.toggle('overflow-hidden', open);
</script>

<svelte:window bind:innerWidth />

{#if open}
	<XButton on:click={() => (open = false)} class="absolute top-0 right-0" />
	<div
		class="fixed top-0 left-0 z-10 flex w-screen h-screen overflow-hidden bg-mediumorchid"
		transition:fly={{ opacity: 100, x: innerWidth, duration: 800 }}
	>
		<div class="flex flex-col items-center justify-center w-1/2 ">
			<img class="justify-center h-96" src={logo} alt="1RG Logo" />
			<div class="w-full p-5 text-4xl font-bold leading-7 tracking-wide text-center uppercase bg-darkseagreen">
				CURIOUS CREATIVE CARING
			</div>
		</div>

		<div class="w-1/2" />
	</div>
{/if}
