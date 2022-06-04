import {searchListings} from '../services/shoppingLists';

expect.extend({
  toContainObject(received, argument) {
    const pass = this.equals(
      received,
      expect.arrayContaining([expect.objectContaining(argument)]),
    );

    if (pass) {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received,
          )} not to contain object ${this.utils.printExpected(argument)}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `expected ${this.utils.printReceived(
            received,
          )} to contain object ${this.utils.printExpected(argument)}`,
        pass: false,
      };
    }
  },
});

describe('Search Listings', () => {
  const listings = [
    {id: '123', name: 'orange'},
    {id: '124', name: 'mango'},
    {id: '125', name: 'milk'},
    {id: '126', name: 'coffee'},
  ];
  it('given a empty search query, searchListings() returns the same array.', () => {
    const listingResults = searchListings(listings, '');
    expect(listingResults).toContainObject({name: 'orange'});
    expect(listingResults).toContainObject({name: 'mango'});
    expect(listingResults).toContainObject({name: 'milk'});
    expect(listingResults).toContainObject({name: 'coffee'});
  });

  it("given 'an' as search query, searchListings() returns the array containing 'orange' and 'apple'.", () => {
    const listingResults = searchListings(listings, 'an');
    expect(listingResults.length).toBe(2);
    expect(listingResults).toContainObject({name: 'orange'});
    expect(listingResults).toContainObject({name: 'mango'});
    expect(listingResults).not.toContainObject({name: 'milk'});
  });

  it("given 'FFee' as search query, searchListings() returns the array containing 'coffee'.", () => {
    const listingResults = searchListings(listings, 'FFee');
    expect(listingResults.length).toBe(1);
    expect(listingResults).toContainObject({name: 'coffee'});
    expect(listingResults).not.toContainObject({name: 'milk'});
  });

  it("given 'milky' as search query, searchListings() does not return an array containing milk.", () => {
    const listingResults = searchListings(listings, 'milky');
    expect(listingResults.length).toBe(0);
    expect(listingResults).not.toContainObject({name: 'milk'});
  });
});
