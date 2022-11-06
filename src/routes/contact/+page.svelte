<script>
	import people from '$lib/images/people.jpg';
</script>

<svelte:head>
	<title>Contact Us</title>
</svelte:head>

<section class="flex">
	<div class="bg-mediumorchid">
		<h1 class="text-9xl  whitespace-pre-wrap uppercase text-white font-black">
			TODO Contact Contact Contact
		</h1>
	</div>
</section>
<section class="flex">
	<div class="w-1/2">
		<img class="object-cover object-right h-full w-full" src={people} alt="contact us" />
	</div>
	<div class="w-1/2 bg-stone-50 flex flex-col">
		<div class="text-2xl items-center justify-center p-14 font-normal">
			<p class="mb-4"><span>We love to chat.</span></p>
			<p class="mb-4">
				<span>Interested in collaborating with 1RG for an event? Share your ideas with us.</span>
			</p>
			<p class="mb-4">
				<span>Looking for a space to host your group or meeting? Ask us about our boardroom rentals.</span>
			</p>
			<p class="mb-4"><span>Want to become a member? We’d love to see you.</span></p>
		</div>
		<div class="items-center justify-center pl-14">
			<h3 class="text-3xl text-mediumorchid uppercase font-bold ">Email:</h3>
			<p class="mb-4 text-2xl"><span>team@1rg.space</span></p>
		</div>
	</div>
</section>
