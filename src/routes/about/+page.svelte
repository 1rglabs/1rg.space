<script>
	import couch_conversation from '$lib/images/1rg/047A6872.jpg';
	import map from '$lib/images/map.jpeg';

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
			class="text-lg leading-loose xl:text-8xl md:text-xl md:leading-[4.5rem] xl:leading-none xl:tracking-widest font-semibold tracking-[.3em] text-center uppercase"
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
			The physical space that we call 1RG is built on the traditional territory of many nations
			including the Mississaugas of the Credit, the Anishnabeg, the Chippewa, the Haudenosaunee and
			the Wendat peoples and is now home to many diverse First Nations, Inuit and Métis peoples.
			This land is covered by Treaty 13 with the Mississaugas of the Credit.
		</p>

		<p>
			Our 1RG community is made up of settlers, immigrants and descendants of immigrants and as
			such, we recognize the sustained intergenerational trauma and continued colonial violence
			against Indigenous peoples, including food insecurity, police brutality, residential school
			denialism and climate change. We recognize that we have ongoing work to continue to learn
			about our own colonial past and unlearn racist and oppressive behaviors, and to interrupt
			these behaviors by others whenever and however we can.
		</p>

		<p>
			We recognize that our efforts are imperfect, and that we participate in and benefit from the
			ongoing harm of colonization and are committed to an ongoing process of learning.
		</p>

		<p>We offer these words in humility, and welcome feedback and critique.</p>
	</div>
	<div class="flex justify-center p-16 -mt-20 xl:w-1/2 xl:mt-0">
		<div>
			<img
				class="w-4/5 h-full xl:w-full"
				src={map}
				alt="2567 Dundas Street West, Toronto, Ontario, Canada, M6P 1X9"
			/>
			<div class="text-xl mt-2">
				1RG is located at
				<a class="text-white hover:text-mediumorchid"
				href="https://www.google.com/maps/search/?api=1&query=1RG&query_place_id=ChIJp-ywuOc1K4gRGQKwgOGgukc"
				target="_blank">
					2567 Dundas Street West, Toronto
				</a>
			</div>
		</div>
	</div>
</section>
