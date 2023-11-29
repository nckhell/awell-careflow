const tracks = require('../tracks/tracks.json');

describe('Tracks', () => {
  it('Care flow should have one track', () => {
    expect(tracks).toHaveLength(1)
  });
});