<script>
  import Heading from '$lib/components/Heading.svelte';
  export let data;
</script>


<section class="flex flex-col justify-center items-center p-10 bg-black md:p-20 text-center text-white">
  <p class="text-center text-sm tracking-widest uppercase">Case study</p>
	<p class="max-w-6xl text-6xl font-bold leading-normal">{data.title}</p>

</section>

<!-- Who -->
<section class="p-12 max-w-3xl m-auto">
  <div class="text-xl font-bold -ml-12 mb-8 tracking-wider bg-black text-white p-2 inline-block">Who</div>
  <div>
  {@html data.who}
  </div>
</section>

<hr/>

<!-- Challenges -->
<section class="p-12 max-w-3xl m-auto">
  <div class="text-xl font-bold -ml-12 mb-8 tracking-wider bg-black text-white p-2 inline-block">Challenges</div>
  {#each data.challenges as challenge}
    <div>{@html challenge.content}</div>
  {/each}
</section>

<hr/>

<!-- Impact -->
<section class="p-12 max-w-3xl m-auto">
  <div class="text-xl font-bold -ml-12 mb-8 tracking-wider bg-black text-white p-2 inline-block">Impact</div>
  {#each data.impact as impact}
    {#if impact.type == "text"}
    <div class="mb-8">{@html impact.content}</div>
    {/if}

    {#if impact.type == "image"}
    <img alt="case-study" src={impact.content}/>
    {/if}
  {/each}
</section>
