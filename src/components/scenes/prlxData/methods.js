export class RearMethods {
  constructor(props) {}

  prToPixel = (path, arr, full, keys) => {
    for (let q in arr) {
      if (arr[q].ratioHeight) {
        arr[q].start = arr[q].start / 1000 * arr[q].ratioHeight;
        arr[q].end = arr[q].end / 1000 * arr[q].ratioHeight;
      }

      if (arr[q].ratio) {
        arr[q].start /= arr[q].ratio;
        arr[q].end /= arr[q].ratio;
      }

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
