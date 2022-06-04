import {searchListings} from '../services/shoppingLists';

describe('Search Listings', () => {
  const listings = ['orange', 'mango', 'milk', 'coffee'];
  it('given a empty search query, searchListings() returns the same array.', () => {
    const listingResults = searchListings(listings, '');
    expect(listingResults).toContain('orange');
    expect(listingResults).toEqual(
      expect.arrayContaining(['orange', 'mango', 'milk', 'coffee']),
    );
  });

  it("given 'an' as search query, searchListings() returns the array containing 'orange' and 'apple'.", () => {
    const listingResults = searchListings(listings, 'an');
    expect(listingResults).toContain('orange');
    expect(listingResults.length).toBe(2);
    expect(listingResults).toEqual(expect.arrayContaining(['orange', 'mango']));
  });

  it("given 'FFee' as search query, searchListings() returns the array containing 'coffee'.", () => {
    const listingResults = searchListings(listings, 'FFee');
    expect(listingResults).toContain('coffee');
    expect(listingResults.length).toBe(1);
  });

  it("given 'milky' as search query, searchListings() does not return an array containing milk.", () => {
    const listingResults = searchListings(listings, 'milky');
    expect(listingResults.length).toBe(0);
  });
});
