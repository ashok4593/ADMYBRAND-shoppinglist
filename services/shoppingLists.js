export const searchListings = function (availableListings, query) {
  return availableListings.filter(listing =>
    listing.toLowerCase().includes(query.toLowerCase()),
  );
};
