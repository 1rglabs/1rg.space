
<script>
  export let sectionTitle;
  export let isReversed = false;
  let order = isReversed ? "order-1" : "order-1 xl:order-3";
</script>

<section class="flex flex-col xl:flex-row justify-center items-stretch lg:mb-24">
	<div class="w-full xl:w-1/2 order-1 block xl:flex {order}">
		<div class="p-12 text-white bg-mediumorchid md:flex items-center justify-center">
			<p class="text-lg leading-loose xl:text-8xl md:text-xl md:leading-[4.5rem] xl:leading-none xl:tracking-widest font-semibold tracking-[.3em] text-center uppercase" >
				{sectionTitle}
			</p>
		</div>
	</div>

	<div class="w-full xl:w-1/2 order-2 p-12 xl:p-20">
		<slot/>
	</div>
</section>
