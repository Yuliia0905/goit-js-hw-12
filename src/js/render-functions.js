function imageTemplate(image) {
  let { largeImageURL, webformatURL, tags, likes, views, comments, downloads } =
    image;
  return `<li class="gallery-item">
      <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" class="gallery-image"></a>
        <ul class="info-list">
          <li class="list-item">
            <h3>Likes</h3>
            <p class="likes-js">${likes}</p>
          </li>
          <li class="list-item">
            <h3>Views</h3>
            <p class="views-js">${views}</p>
          </li>
          <li class="list-item">
            <h3>Comments</h3>
            <p class="comments-js">${comments}</p>
          </li>
          <li class="list-item">
            <h3>Downloads</h3>
            <p class="downloads-js">${downloads}</p>
          </li>
        </ul>
    </li>`;
}

export function imagesTemplate(images) {
  return images.map(imageTemplate).join('');
}
