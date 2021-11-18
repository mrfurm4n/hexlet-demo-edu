// myMathModule.js

export const getTriangleArea = (h, b) => 1 / 2 * h * b;

// solution.js

import { getTriangleArea } from './myMathModule.js';

const getTrinagleAreaByN = (n) => getTriangleArea(n, n ** 2 / 2);

export default getTrinagleAreaByN;