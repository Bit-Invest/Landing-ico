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
    start: 300,
    end: 400,
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: 'translateX'
      }
    ]
  },
  {
    start: 400,
    end: 500,
    properties: [
      {
        startValue: 100,
        endValue: 65,
        property: 'width'
      }
    ]
  },
  {
    start: 700,
    end: 800,
    properties: [
      {
        startValue: 65,
        endValue: 100,
        property: 'width'
      }
    ]
  }
];

export const messagePrlx1 = [
  {
    start: 500,
    end: 600,
    properties: [
      {
        startValue: 10.2,
        endValue: 10.2,
        property: 'translateX'
      },
      {
        startValue: -13.7,
        endValue: -13.7,
        property: 'translateY'
      }
    ]
  },
  {
    start: 500,
    end: 600,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacityFilter'
      }
    ]
  }
];

export const messagePrlx2 = [
  {
    start: 600,
    end: 700,
    properties: [
      {
        startValue: 10.2,
        endValue: 10.2,
        property: 'translateX'
      },
      {
        startValue: -13.7,
        endValue: -13.7,
        property: 'translateY'
      }
    ]
  },
  {
    start: 600,
    end: 700,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacityFilter'
      }
    ]
  }
];

export const messagePrlx3 = [
  {
    start: 700,
    end: 800,
    properties: [
      {
        startValue: 10.2,
        endValue: 10.2,
        property: 'translateX'
      },
      {
        startValue: -13.7,
        endValue: -13.7,
        property: 'translateY'
      }
    ]
  },
  {
    start: 700,
    end: 800,
    properties: [
      {
        startValue: 1,
        endValue: 0,
        property: 'opacityFilter'
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
