export const searchListings = function (availableListings, query) {
  return availableListings.filter(listing =>
    listing.name.toLowerCase().includes(query.toLowerCase()),
  );
};
