<script>
	import boardroom from '$lib/images/1rg/047A6732.jpg';

	import Heading from '$lib/components/Heading.svelte';
</script>

<svelte:head>
	<title>Memberships</title>
</svelte:head>

<Heading>Memberships Memberships Memberships</Heading>
<section class="flex flex-col md:items-stretch md:flex-row">
	<div class="h-64 md:h-[unset] md:w-1/2">
		<img
			class="object-cover object-center w-full h-full grayscale"
			src={boardroom}
			alt="boardroom meeting"
		/>
	</div>

	<div
		class="flex flex-col justify-center p-16 space-y-10 text-xl font-semibold leading-10 tracking-widest text-center uppercase lg:leading-loose lg:text-2xl md:w-1/2 bg-stone-50 text-mediumorchid"
	>
		<p>Interested in joining? Email us at <a class="hover:text-darkseagreen" href="mailto:team@1rg.space">team@1rg.space</a></p>

	</div>
</section>
