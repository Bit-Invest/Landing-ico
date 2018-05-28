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
    start: 8000,
    end: 9000,
    properties: [
      {
        startValue: 100,
        endValue: 65,
        property: 'width'
      }
    ]
  }
];

export const messagePrlx1 = [
  {
    start: 7000,
    end: 7010,
    properties: [
      {
        startValue: 0,
        endValue: 10.2,
        property: 'translateX'
      },
      {
        startValue: 0,
        endValue: -13.7,
        property: 'translateY'
      }
    ]
  }
];

newMeth.prToPixel(['i', 'properties', 'i'], prlxLeftScene, window.innerWidth, [
  'startValue',
  'endValue'
]);

/*newMeth.prToPixel(['i', 'properties', 'i'], messagePrlx1, window.innerWidth, [
  'startValue',
  'endValue'
]);*/
