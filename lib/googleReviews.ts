// Live Google Business Profile rating via the Places API (New).
// Requires two env vars (set locally in .env.local and on the host):
//   GOOGLE_PLACES_API_KEY — Google Cloud key with Places API enabled
//   GOOGLE_PLACE_ID       — the Shopa Marketing profile's Place ID
// Until they're set (or if the fetch fails), the last known values are shown.

const FALLBACK = { rating: 4.7, count: 319 };

export async function getGoogleRating(): Promise<{ rating: number; count: number }> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${key}`,
      { next: { revalidate: 86400 } } // refresh once a day
    );
    if (!res.ok) return FALLBACK;
    const data = await res.json();
    if (typeof data.rating !== 'number' || typeof data.userRatingCount !== 'number') return FALLBACK;
    return { rating: data.rating, count: data.userRatingCount };
  } catch {
    return FALLBACK;
  }
}
