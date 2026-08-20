module.exports = {
  name: "Client Name",
  address: {
    city: "City",
    state: "State",
    zip: "12345",
  },
  phone: "123-456-7890",
  domain: "https://example.com",
  // Google reviews rendered at build time (see src/_data/reviews.js).
  // The URL must contain the `!1s0x…:0x…` segment — copy it from the
  // maps.google.com address bar (share-links don't have it).
  // reviews: {
  //   google_maps_url: "https://www.google.com/maps/place/…!1s0x…:0x…",
  //   display: { max_reviews: 8, min_rating: 4, require_text: true },
  // },
};
