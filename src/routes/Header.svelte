<script>
	import Logo from '$lib/components/Logo.svelte';
	import HamburgerButton from '$lib/components/HamburgerButton.svelte';
	import Menu from './Menu.svelte';
	import IconMastadon from '~icons/fa6-brands/mastodon'
	import IconInstagram from '~icons/fa6-brands/instagram'

	let menuOpen = false;
</script>

<header class="flex h-20 bg-mediumorchid">
	<a class="text-white hover:text-darkseagreen" href="/">
		<Logo class="justify-center h-20 lg:ml-24" />
	</a>
	<div class="flex items-center justify-end w-full">
		<div class="hidden md:flex text-white mr-2 md:mr-8  items-center text-lg md:text-xl font-bold uppercase">
			<a class="hover:text-darkseagreen" href="https://words.1rg.space/">Words</a>
		</div>
		<div class="hidden md:flex text-white mr-2 md:mr-8  items-center text-lg md:text-xl font-bold uppercase space-x-2">
			<a class="hover:text-darkseagreen" href="https://labs.1rg.space/">Labs</a>
		</div>
		<div class="hidden md:flex text-white mr-2 md:mr-8  items-center text-lg md:text-xl font-bold uppercase space-x-2">
			<a class="hover:text-darkseagreen" href="https://incubator.1rg.space/">Incubator</a>
		</div>
		<HamburgerButton on:click={() => (menuOpen = true)} />
	</div>
</header>
<Menu bind:open={menuOpen} />
