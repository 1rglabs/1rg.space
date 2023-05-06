<script>
  import bike_brigade from '$lib/case_studies/bike_brigade.json';
  import couch_conversation from '$lib/images/1rg/047A6872.jpg';
  import portrait from '$lib/images/portraits/047A5808.jpg';

  import Heading from '$lib/components/Heading.svelte';
  import CaseStudy from '$lib/components/CaseStudy.svelte';
</script>

<svelte:head>
  <title>Case Study - Bike Brigade</title>
</svelte:head>

<CaseStudy data={bike_brigade}/>
