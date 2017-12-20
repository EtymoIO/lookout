/*
Proof of concept for Etymo
 */
import {FacetsDive} from '../components/facets-dive/facets-dive';

const ss = document.querySelector('facets-dive') as FacetsDive;


ss.data = [{
  "id": "18447",
  "authors": [
    "Mostafa Dehghani",
    "Hamed Zamani",
    "Aliaksei Severyn",
    "Jaap Kamps",
    "W. Bruce Croft"
  ],
  "name": "Mostafa Dehghani et al.  2017",
  "size": 22,
  "title": "Neural Ranking Models with Weak Supervision",
  "type": "paper",
  "year": "2017",
  "NoA" : 5
},
{
  "id": "18440",
  "authors": [
    "Marc-Andr\u00e9 Gardner",
    "Kalyan Sunkavalli",
    "Ersin Yumer",
    "Xiaohui Shen",
    "Emiliano Gambaretto",
    "Christian Gagn\u00e9",
    "Jean-Fran\u00e7ois Lalonde"
  ],
  "name": "Marc-Andr\u00e9 Gardner et al.  2017",
  "size": 25,
  "title": "Learning to Predict Indoor Illumination from a Single Image",
  "type": "paper",
  "year": "2017",
  "NoA" : 7
},
{
  "id": "18445",
  "authors": [
    "Mo Yu",
    "Wenpeng Yin",
    "Kazi Saidul Hasan",
    "Cicero dos Santos",
    "Bing Xiang",
    "Bowen Zhou"
  ],
  "name": "Mo Yu et al.  2017",
  "size": 28,
  "title": "Improved Neural Relation Detection for Knowledge Base Question Answering",
  "type": "paper",
  "year": "2017",
  "NoA" : 5
},
{
  "id": "18446",
  "authors": [
    "Amit Gupta",
    "R\u00e9mi Lebret",
    "Hamza Harkous",
    "Karl Aberer"
  ],
  "name": "Amit Gupta et al.  2017",
  "size": 7,
  "title": "Taxonomy Induction using Hypernym Subsequences",
  "type": "paper",
  "year": "2017",
  "NoA" : 4
},
{
  "id": "18443",
  "authors": [
    "Ahmed M. Alaa",
    "Mihaela van der Schaar"
  ],
  "name": "Ahmed M. Alaa et al.  2017",
  "size": 18,
  "title": "Bayesian Inference of Individualized Treatment Effects using Multi-task\n  Gaussian Processes",
  "type": "paper",
  "year": "2017",
  "NoA" : 2
},
{
  "id": "18448",
  "authors": [
    "Seyed Sajad Mousavi",
    "Michael Schukat",
    "Enda Howley"
  ],
  "name": "Seyed Sajad Mousavi et al.  2017",
  "size": 41,
  "title": "Traffic Light Control Using Deep Policy-Gradient and Value-Function\n  Based Reinforcement Learning",
  "type": "paper",
  "year": "2017",
  "NoA" : 3
},
{
  "id": "18442",
  "authors": [
    "Yaniv Sheena",
    "M\u00ed\u0161a Hejn\u00e1",
    "Yossi Adi",
    "Joseph Keshet"
  ],
  "name": "Yaniv Sheena et al.  2017",
  "size": 12,
  "title": "Automatic Measurement of Pre-aspiration",
  "type": "paper",
  "year": "2017",
  "NoA" : 4
},
{
  "id": "6683",
  "authors": [
    "Fang Han",
    "Han Liu"
  ],
  "name": "Fang Han et al.  2016",
  "size": 64,
  "title": "ECA: High Dimensional Elliptical Component Analysis in non-Gaussian\n  Distributions",
  "type": "paper",
  "year": "2016",
  "NoA" : 2
},
{
  "id": "6682",
  "authors": [
    "Memo Akten",
    "Mick Grierson"
  ],
  "name": "Memo Akten et al.  2016",
  "size": 24,
  "title": "Real-time interactive sequence generation and control with Recurrent\n  Neural Network ensembles",
  "type": "paper",
  "year": "2016",
  "NoA" : 2
}
];


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
    description: 'Number of Authors vs Year',
    settings: {
      'verticalFacet': 'NoA',
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
