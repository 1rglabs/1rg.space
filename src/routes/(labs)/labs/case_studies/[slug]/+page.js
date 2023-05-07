/** @type {import('./$types').PageLoad} */


import bike_brigade from '$lib/case_studies/bike_brigade.json';
import nfftt from '$lib/case_studies/not_far_from_the_tree.json';
import { error } from '@sveltejs/kit';

const pages = {
  bike_brigade,
  nfftt
}

export function load({ params }) {

  if (params.slug in pages) {
    return pages[params.slug];
  }

  throw error(404, 'Not found');
}
