<script>
	import logo from '$lib/images/1rg_logo.svg';
	import HamburgerButton from '$lib/components/HamburgerButton.svelte';
	import Menu from './Menu.svelte';

	let menuOpen = false;
</script>

<header class="flex h-20 bg-mediumorchid">
	<img class="justify-center w-24" src={logo} alt="1RG Logo" />
	<div class="flex items-center justify-end w-full">
		<HamburgerButton on:click={() => (menuOpen = true)} />
	</div>
</header>
<Menu bind:open={menuOpen} />
