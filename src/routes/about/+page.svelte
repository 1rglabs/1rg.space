<script>
	import couch_conversation from '$lib/images/1rg/047A6872.jpg';
	import portrait from '$lib/images/portraits/047A5808.jpg';

	import Heading from '$lib/components/Heading.svelte';
</script>

<svelte:head>
	<title>About Us</title>
</svelte:head>

<Heading>About Us About Us About Us</Heading>

<section class="flex justify-center p-10 bg-black md:p-20">
	<p class="max-w-6xl text-4xl font-light leading-normal text-center text-gray-300 ">
		1RG invites individuals, teams and organizations who value community care, creativity and
		innovation to work and play in a space that promotes collaboration and curiosity.
	</p>
</section>
<section class="flex flex-col md:flex-row">
	<div class="p-20 text-white bg-mediumorchid md:w-1/2 md:flex md:items-center">
		<p
			class="text-lg xl:text-8xl md:text-xl md:leading-[4.5rem] xl:leading-none xl:tracking-widest font-bold tracking-[.3em] text-center uppercase"
		>
			Making Space for Everyone
		</p>
	</div>
	<div class="p-16 text-black bg-white md:w-1/2">
		<img class="mx-auto grayscale" src={couch_conversation} alt="Conversation on the couch" />

		<p class="mt-12 text-xl text-center md:text-left">
			Our space includes members from non-profits, community organizers, freelance creatives and
			remote tech teams. Everyone is welcome at 1RG and we believe that the diversity of our members
			is what generates lasting change.
		</p>
	</div>
</section>
<section class="flex flex-col text-white bg-black xl:items-stretch xl:flex-row ">
	<div class="p-16 space-y-5 text-xl xl:w-1/2">
		<p>
			1RG was started by <a class="hover:text-mediumorchid" href="https://max.computer"
				>Max Veytsman</a
			>
			and
			<a href="https://www.serenaperuzzo.com/" class="hover:text-mediumorchid">Serena Peruzzo</a> in
			May 2022.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
			laboris nisi ut aliquip ex ea commodo consequat.
		</p>
		<p>
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
			pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
			mollit anim id est laborum.
		</p>
	</div>
	<div class="flex justify-center p-16 -mt-20 xl:w-1/2 xl:mt-0">
		<img class="object-cover object-center w-4/5 h-full xl:w-full" src={portrait} alt="Max & Serena" />
	</div>
</section>
