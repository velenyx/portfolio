import { cn } from './classnames';

describe('cn', () => {
  // Returns a string of concatenated class names when given valid inputs.
  it('should return a string of concatenated class names when given valid inputs', () => {
    const result = cn('class1', 'class2', 'class3');
    expect(result).toBe('class1 class2 class3');
  });

  // Returns an empty string when given no inputs.
  it('should return an empty string when given no inputs', () => {
    const result = cn();
    expect(result).toBe('');
  });

  // Returns a string of concatenated class names when given a mix of valid and invalid inputs.
  it('should return a string of concatenated class names when given a mix of valid and invalid inputs', () => {
    const result = cn('class1', null, undefined, 'class2');
    expect(result).toBe('class1 class2');
  });

  // Returns an empty string when given only invalid inputs.
  it('should return an empty string when given only invalid inputs', () => {
    const result = cn(null, undefined);
    expect(result).toBe('');
  });

  // Returns an empty string when given an empty array.
  it('should return an empty string when given an empty array', () => {
    const result = cn([]);
    expect(result).toBe('');
  });

  // Returns a string of concatenated class names when given an array of empty arrays.
  it('should return a string of concatenated class names when given an array of empty arrays', () => {
    const result = cn([[], [], []]);
    expect(result).toBe('');
  });
});
