// Super Simple Unit Functions

export const add = (a: number, b: number) => {
  return a + b;
};

export const divide = (a: number, b: number) => {
  if (b === 0) {
    throw new Error('div by 0');
  }
  return a / b;
};

export const concat = (a: string, b: string) => {
  if (a.length === 0 || b.length === 0) {
    throw new Error('empty string passed');
  }
  return a + b;
};
