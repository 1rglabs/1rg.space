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
<section class="grid min-h-[90vh] grid-cols-3">
	<div class="col-span-1 ">
		<img
			class="object-cover object-right w-full h-full grayscale"
			src={people}
			alt="people hanging out"
		/>
	</div>
	<div class="grid col-span-2 grid-rows-5">
		<div class="row-span-2 bg-darkseagreen">
			<h1 class="max-w-3xl mt-20 mb-8 overflow-hidden font-black whitespace-nowrap text-9xl">
				TODO 1RG / 2RG / 3RG
			</h1>
			<div class="flex py-2 text-xl text-white bg-black space-x-72">
				<h2>TODO / CURIOUS / CREATIVE / CARING</h2>
				<h2>/ CURIOUS / CREATIVE / CARING</h2>
			</div>
		</div>
		<div class="flex row-span-3 bg-white">
			<div class="flex items-center justify-center h-full px-8 text-white bg-mediumorchid">
				<Star />
			</div>
			<div class="flex items-center justify-center w-full">
				<Button class="px-6 py-5 mx-2 font-black">UPCOMING EVENTS</Button>
			</div>
		</div>
	</div>
</section>
