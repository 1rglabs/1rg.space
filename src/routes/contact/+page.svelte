<script>
    import people from '$lib/images/people.jpg'
</script>

<svelte:head>
    <title>Contact Us</title>
</svelte:head>

<section class="flex">
    <div class="bg-mediumorchid">
        <h1 class="text-9xl  whitespace-pre-wrap uppercase text-white font-black">Contact Contact Contact</h1>
    </div>
</section>
<section class="flex">
    <div class="w-1/2">
        <img 
          class="object-cover object-right h-full w-full" 
          src={people}
          alt="contact us"/>
    </div>
    <div class="bg-stone-50">
        <p>We love to chat.</p>
        <p>Interested in collaborating with 1RG for an event? Share your ideas with us.</p>
        <p>Looking for a space to host your group or meeting?  Ask us about our boardroom rentals.</p>
        <p>Want to become a member? We’d love to see you.</p>
    </div>
</section>