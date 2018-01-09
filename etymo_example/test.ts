/*
Proof of concept for Etymo
 */
import { FacetsDive } from '../facets-dive/components/facets-dive/facets-dive';

import { data } from './dataset1';

const ss = document.querySelector('facets-dive') as FacetsDive;

ss.data = data

const PRESET_VIEWS = [
  {
    description: '-- select --',
    settings: {
      'verticalFacet': '',
      'verticalBuckets': 10,
      'horizontalFacet': '',
      'horizontalBuckets': 10,
      'positionMode': 'stacked',
      'verticalPosition': '',
      'horizontalPosition': '',
      'colorBy': ''
    },
  },
  {
    description: 'size vs Year',
    settings: {
      'verticalFacet': 'size',
      'verticalBuckets': 3,
      'horizontalFacet': 'year',
      'horizontalBuckets': 25,
      'positionMode': 'stacked',
      'verticalPosition': '',
      'horizontalPosition': '',
      'colorBy': ''
    }
  },
]

const presets = document.querySelector('.presets') as HTMLSelectElement;
d3.select(presets)
    .selectAll('option')
    .data(PRESET_VIEWS)
    .enter()
    .append('option')
    .attr('value', (view, index) => index)
    .text(view => view.description);

const loadSettings = (index: number) => {
  const {settings} = PRESET_VIEWS[index];
  for (const attr in settings) {
    ss[attr] = settings[attr];
  }
};
presets.onchange = () => loadSettings(+presets.value);
loadSettings(0);
