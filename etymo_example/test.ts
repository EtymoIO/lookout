/*
Proof of concept for Etymo
 */
import { FacetsDive } from '../facets-dive/components/facets-dive/facets-dive';

import { data1 } from './dataset1';
import { data2 } from './dataset2';
import { data3 } from './dataset3';

const ss = document.querySelector('facets-dive') as FacetsDive;

var test1 = data3[0]
console.log('test1')
console.log(test1)
var test2 = test1.nodes
console.log('test2')
console.log(test2)

for (var i =0; i< test2.length; i++)
  {
    delete test2[i].edges
    delete test2[i].topic_vector
    delete test2[i].id
    delete test2[i].name
    test2[i].number_of_authors = test2[i].authors.length
  }

ss.data = test2;



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
    description: 'Size vs Year',
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
  {
    description: 'Author vs Year',
    settings: {
      'verticalFacet': 'number_of_authors',
      'verticalBuckets': 8,
      'horizontalFacet': 'year',
      'horizontalBuckets': 25,
      'positionMode': 'stacked',
      'verticalPosition': '',
      'horizontalPosition': '',
      'colorBy': ''
    }
  },
  {
    description: 'Size vs Author',
    settings: {
      'verticalFacet': 'number_of_authors',
      'verticalBuckets': 8,
      'horizontalFacet': 'size',
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
