<script lang="ts">
	import { browser } from '$app/environment';
	import XButton from '$lib/components/XButton.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { fly, fade } from 'svelte/transition';

	import { page } from '$app/stores';

	let innerWidth: number;

	let menuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Memberships', href: '/memberships' },
		{ name: 'Friends of 1RG', href: '/friends' },
		{ name: 'Events', href: '/events' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Contact', href: '/contact' }
	];

	let externalLinks = [
		{ name: 'Labs', href: 'https://labs.1rg.space' },
		{ name: 'Words', href: 'https://words.1rg.space' },
		{ name: 'Incubator', href: 'https://incubator.1rg.space' }
	];
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

		<div class="flex-col items-center justify-center hidden w-1/2 md:flex">
			<Logo class="justify-center text-white h-94" />
			<div
				class="w-full p-5 text-5xl font-bold tracking-wider text-center uppercase bg-darkseagreen"
				transition:fade={{ duration: 1000 }}
			>
				CURIOUS CREATIVE CARING
			</div>
		</div>

		<div class="flex items-center w-1/2 h-full">
			<ul
				class="flex flex-col justify-between text-3xl font-black tracking-wider uppercase lg:text-5xl h-3/4 lg:h-full xl:text-7xl"
			>
				{#each menuItems as menuItem}
					<li class={$page.url.pathname === menuItem.href ? 'text-darkseagreen' : 'text-white'}>
						<a on:click={() => (open = false)} href={menuItem.href} class="hover:text-darkseagreen "
							>{menuItem.name}</a
						>
					</li>
				{/each}
				<div class="md:hidden text-white py-10" />
				{#each externalLinks as externalLink}
					<li class="md:hidden text-white">
						<a href={externalLink.href} class="hover:text-darkseagreen ">{externalLink.name}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
{/if}
