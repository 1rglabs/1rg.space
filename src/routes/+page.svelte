<script>
	import animated from '$lib/images/1rg_animated.gif';
	import people from '$lib/images/people.jpg';
	import Button from '$lib/components/Button.svelte';
	import Star from './Star.svelte';
</script>

<svelte:head>
	<title>1RG Space</title>
	<meta name="description" content="1RG Space" />
</svelte:head>

<section class="flex justify-center px-2 py-40 text-white bg-black">
	<img src={animated} alt="animated 1RG logo" />
</section>
<section class="grid min-h-[90vh] grid-cols-12 grid-rows-5">
	<div class="col-span-4 row-span-5">
		<img
			class="object-cover object-right w-full h-full grayscale"
			src={people}
			alt="people hanging out"
		/>
	</div>
	<div class="flex flex-col col-span-8 row-span-2 bg-darkseagreen">
		<div class="flex justify-center mt-5 mb-8 overflow-hidden">
			<h1 class="mt-20 font-black whitespace-nowrap text-10xl">1RG / 1RG / 1RG</h1>
		</div>
		<div class="flex justify-between py-2 mb-6 -mt-8 text-xl font-light text-white bg-black">
			<h2>CURIOUS / CREATIVE / CARING</h2>
			<h2>/ CURIOUS / CREATIVE / CARING</h2>
		</div>
	</div>
	<div
		class="flex items-center justify-center col-span-2 row-span-3 mr-5 text-white bg-mediumorchid max-w-60"
	>
		<Star />
	</div>
	<div class="flex items-center justify-center col-span-6 row-span-3 bg-white ">
		<Button class="px-6 py-5 m-10 font-black text-8xl">UPCOMING EVENTS</Button>
	</div>
</section>
