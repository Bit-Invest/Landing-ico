import { RearMethods } from './methods';

let newMeth = new RearMethods();

export const prlxLeftScene = [
  {
    start: 0,
    end: 10,
    ratioHeight: window.innerHeight,
    properties: [
      {
        startValue: -100,
        endValue: -100,
        property: 'translateX'
      }
    ]
  },
  {
    start: 1000,
    end: 2000,
    ratioHeight: window.innerHeight,
    properties: [
      {
        startValue: -100,
        endValue: 0,
        property: 'translateX'
      }
    ]
  },
  {
    start: 2000,
    end: 3000,
    ratioHeight: window.innerHeight,
    properties: [
      {
        startValue: 100,
        endValue: 65,
        property: 'width'
      }
    ]
  },
  {
    start: 5000,
    end: 6000,
    ratioHeight: window.innerHeight,
    properties: [
      {
        startValue: 65,
        endValue: 100,
        property: 'width'
      }
    ]
  },
  {
    start: 6000,
    end: 7000,
    ratioHeight: window.innerHeight,
    properties: [
      {
        startValue: 100,
        endValue: 50,
        property: 'width'
      }
    ]
  },
  {
    start: 10000,
    end: 11000,
    ratioHeight: window.innerHeight,
    properties: [
      {
        startValue: 50,
        endValue: 60,
        property: 'width'
      }
    ]
  },
  {
    start: 14000,
    end: 15000,
    ratioHeight: window.innerHeight,
    properties: [
      {
        startValue: 60,
        endValue: 100,
        property: 'width'
      }
    ]
  }
];

export const messagePrlx1 = [
  {
    start: 2900,
    end: 3000,
    ratioHeight: window.innerHeight,
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
    start: 3000,
    end: 3500,
    ratioHeight: window.innerHeight,
    properties: [
      {
        nopx: true,
        startValue: 1,
        endValue: 0,
        property: 'opacityFilter'
      }
    ]
  }
];

export const messagePrlx2 = [
  {
    start: 3900,
    end: 4000,
    ratioHeight: window.innerHeight,
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
    start: 4000,
    end: 4500,
    ratioHeight: window.innerHeight,
    properties: [
      {
        nopx: true,
        startValue: 1,
        endValue: 0,
        property: 'opacityFilter'
      }
    ]
  }
];

export const messagePrlx3 = [
  {
    start: 4900,
    end: 5000,
    ratioHeight: window.innerHeight,
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
    start: 5000,
    end: 5500,
    ratioHeight: window.innerHeight,
    properties: [
      {
        nopx: true,
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
