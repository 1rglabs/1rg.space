<script>
	import Heading from '$lib/components/Heading.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<svelte:head>
	<title>Friends of 1RG</title>
</svelte:head>

<Heading>Friends Friends Friends</Heading>
<section class="flex flex-col md:items-stretch md:flex-row bg-stone-50 text-lg md:text-xl">
	<div class="flex flex-col">
		<div class="p-5 md:p-16 m-auto">
			<p class="mb-4">
				If you love the vibe at 1RG but don’t need a workspace, this is for you!
			</p>
			<p>
				By becoming a Friend of 1RG, you can support our space and stay connected without committing to a desk, or a monthly payment.
			</p>
			<p class="mb-4">Here's the deal:</p>
			<p><span class="font-semibold">Pay What You Can</span>: We suggest $150 per year, but give what feels right for you.</p>
			<h2>Perks</h2>
				<ul class="list-disc list-inside ml-4">
					<li><span class="font-semibold">Early Bird</span> access to our community dinners (you get to RSVP a week before the event goes public!)</li>
					<li>An invite to our <span class="font-semibold">exclusive yearly appreciation event</span>, just for our members and supporters.</li>
				</ul>
			<p class="mt-4">We can’t wait to see how this new initiative helps our community grow stronger.</p>
			<p class="mt-4 mb-4">
				Looking for a space to host your group or meeting? Ask us about our boardroom rentals.
			</p>
			<div class="text-center flex flex-col items-center sticky top-10 md:relative">
				<p class="flex flex-col justify-center text-xl font-semibold leading-10 tracking-widest text-center uppercase lg:leading-loose lg:text-2xl  text-mediumorchid">
					<Button href="https://members.1rg.space/b/14k9BW62g0cOdhe3cm" class="px-5 py-3 text-2xl md:text-4xl uppercase">Become a <br>friend of 1RG</Button>
				</p>
			</div>
		</div>
		
	</div>
</section>
