import { RearMethods } from './methods';

let newMeth = new RearMethods();

export const prlxLeftScene = [
  {
    start: 0,
    end: 10,
    properties: [
      {
        startValue: -100,
        endValue: -100,
        property: 'translateX'
      }
    ]
  },
  {
    start: 6000,
    end: 7000,
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: 'translateX'
      }
    ]
  },
  {
    start: 7000,
    end: 8000,
    properties: [
      {
        startValue: 100,
        endValue: 55,
        property: 'width'
      }
    ]
  }
];

newMeth.prToPixel(['i', 'properties', 'i'], prlxLeftScene, window.innerWidth, [
  'startValue',
  'endValue'
]);
