const { queryString } = require('./queryString')

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Willian',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Willian&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Fabio',
      skills: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Fabio&skills=JS,TDD');
  });

  it('should throw an error when an object is passed as key:value', () => {
    const obj = {
      name: 'Fabio',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
})