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
	<div
		class="fixed top-0 left-0 z-10 flex w-screen h-screen overflow-hidden bg-mediumorchid"
		transition:fly={{ opacity: 100, x: innerWidth, duration: 800 }}
	>
		<XButton on:click={() => (open = false)} class="absolute top-0 right-0" />

		<div class="flex-col items-center justify-center hidden w-1/2 xl:flex">
			<img class="justify-center h-96" src={logo} alt="1RG Logo" />
			<div
				class="w-full p-5 text-5xl font-bold tracking-wider text-center uppercase bg-darkseagreen"
			>
				CURIOUS CREATIVE CARING
			</div>
		</div>

		<div class="flex items-center w-1/2 h-full">
			<ul
				class="flex flex-col justify-between px-5 py-12 text-3xl font-black tracking-wider text-white uppercase lg:text-5xl h-3/4 lg:h-full xl:text-7xl"
			>
				<li><a href="#" class="hover:text-darkseagreen">Home</a></li>
				<li><a href="#" class="hover:text-darkseagreen">Memberships</a></li>
				<li><a href="#" class="hover:text-darkseagreen">Events</a></li>
				<li><a href="#" class="hover:text-darkseagreen">About Us</a></li>
				<li><a href="#" class="hover:text-darkseagreen">Contact</a></li>
				<li><a href="https://community.1rg.space">Member Space</a></li>
			</ul>
		</div>
	</div>
{/if}
