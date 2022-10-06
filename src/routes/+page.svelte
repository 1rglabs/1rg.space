<script>
	import animated from '$lib/images/1rg_animated.gif';
	import people from '$lib/images/people.jpg';
	import Button from '$lib/components/Button.svelte';
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
				<svg
					class="w-36 h-36"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 151 146"
				>
					<polygon
						points="151 51.008 132.865 20.699 92.154 45.094 92.895 0 58.105 0 58.475 45.094 17.765 20.699 0 51.008 40.341 73.185 0 94.992 17.765 125.301 58.475 100.906 58.105 146 92.895 146 92.154 101.276 132.865 125.301 151 94.992 110.659 73.185 151 51.008"
					/>
				</svg>
			</div>
			<div class="flex items-center justify-center w-full">
				<Button class="px-6 py-5 mx-2 font-black text-8xl">UPCOMING EVENTS</Button>
			</div>
		</div>
	</div>
</section>
