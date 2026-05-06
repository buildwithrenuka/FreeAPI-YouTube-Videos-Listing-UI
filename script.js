const container = document.getElementById("videos");

function createCard(video) {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${video.thumbnail?.url}" alt="thumbnail">
    <h3>${video.title}</h3>
    <p>${video.channelTitle}</p>
    <span>${video.viewCount} views</span>
  `;

  return div;
}

async function init() {
  const videos = await fetchVideos();

  videos.forEach(video => {
    const card = createCard(video);
    container.appendChild(card);
  });
}

init();