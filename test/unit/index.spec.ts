import { helloWorld } from '../../src';

describe('Hello World', () => {
  it('should return hello world', () => {
    const expectResult = 'Hello World';
    const input = {
      message: 'Hello World',
    };

    const result = helloWorld(input);

    expect(result).toEqual(expectResult);
  });
});
