<script>
	import people from '$lib/images/1rg/047A6872.jpg';

	import Button from '$lib/components/Button.svelte';
	import SpinningStar from '$lib/components/SpinningStar.svelte';
	import AnimatedLogo from '$lib/components/AnimatedLogo.svelte';
</script>

<svelte:head>
	<title>1RG Space</title>
	<meta name="description" content="1RG Space" />
</svelte:head>

<section class="flex justify-center p-2 text-white bg-black">
	<AnimatedLogo />
</section>
<section
	class="grid min-h-[90vh] grid-cols-12 grid-rows-[20rem_1fr_1fr] md:grid-rows-[24rem_1fr_1fr] lg:grid-rows-[32rem_1fr_1fr] xl:grid-rows-5"
>
	<div class="col-span-12 lg:row-span-1 xl:col-span-4 xl:row-span-5">
		<img
			class="object-cover object-center md:object-[50%_70%] xl:object-[70%_50%] w-full h-full grayscale"
			src={people}
			alt="People at 1RG"
		/>
	</div>
	<div class="flex flex-col col-span-12 lg:row-span-1 xl:col-span-8 xl:row-span-2 bg-darkseagreen">
		<div class="flex justify-center mt-5 mb-8 overflow-hidden">
			<h1
				class="mt-5 text-6xl font-black text-center xl:mt-20 md:whitespace-nowrap md:text-9xl xl:text-10xl"
			>
				1RG / 1RG / 1RG
			</h1>
		</div>
		<div
			class="flex flex-col items-center justify-center mb-6 text-lg font-light text-white bg-black lg:py-2 md:flex-row md:justify-between md:-mt-8 xl:text-xl"
		>
			<h2>CURIOUS / CREATIVE / CARING</h2>
			<h2>/ CURIOUS / CREATIVE / CARING</h2>
		</div>
	</div>
	<div
		class="flex items-center justify-center col-span-4 mr-5 text-white xl:col-span-2 xl:row-span-3 bg-mediumorchid "
	>
		<SpinningStar class="w-14 lg:w-24 xl:w-36" />
	</div>
	<div class="flex items-center justify-center col-span-8 bg-white xl:col-span-6 xl:row-span-3">
		<Button
			href="/events"
			class="px-6 py-5 m-10 text-2xl font-black leading-tight lg:text-6xl xl:text-8xl xl:leading-normal"
		>
			UPCOMING EVENTS
		</Button>
	</div>
</section>
