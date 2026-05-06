const API_URL =
  "https://api.freeapi.app/api/v1/public/youtube/videos";

async function fetchVideos() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.data.data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}