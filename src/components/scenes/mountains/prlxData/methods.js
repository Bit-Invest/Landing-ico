export class RearMethods {
  constructor(props) {}

  prToPixel = (path, arr, full, keys) => {
    for (let q in arr) {
      for (let w in arr[q].properties) {
        if (!arr[q].properties[w].nopx) {
          arr[q].properties[w].startValue *= full / 100;
          arr[q].properties[w].endValue *= full / 100;
        }
      }
    }

    return arr;
  };
}
