
export const random = (ceil = 100, floor = 0) => Math.round(Math.random() * ceil) - floor;

export const randoms = (num = 10, ceil = 100, floor = 0) => [...Array(num).keys()]
  .map(random.bind(null, ceil, floor));

