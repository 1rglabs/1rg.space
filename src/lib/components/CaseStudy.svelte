<script>
  import Heading from '$lib/components/Heading.svelte';
  export let data;
  console.log({data});
</script>


<section class="flex justify-center p-10 bg-black md:p-20">
	<p class="max-w-6xl text-6xl font-bold leading-normal text-center text-gray-300 ">
      A 1RG Case Study:
    </p>

    <Heading>{data.title}</Heading>

</section>


<section class="flex justify-center h-20 bg-green-400"/>


<!-- Who -->
<section class="p-20 bg-blue-300">
  {data.who}
</section>

<!-- Challenges -->
<section class="p-20 bg-teal-600">
  {#each data.challenges as challenge}
    <div>{@html challenge.content}</div>
  {/each}
</section>

<!-- Impact -->
<section class="p-20 bg-orange-300">
  {#each data.impact as impact}
    {#if impact.type == "text"}
    <div class="my-8">{@html impact.content}</div>
    {/if}

    {#if impact.type == "image"}
    <img src={impact.content}/>
    {/if}
  {/each}
</section>
