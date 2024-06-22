import Axios from 'axios';

const API_KEY = '44366879-bfb1deb33845459b9a36e6118';

const axios = Axios.create({
  baseURL: 'https://pixabay.com/api/',
});

export async function getImages(requestImage, page) {
  const res = await axios.get('', {
    params: {
      key: API_KEY,
      q: requestImage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return res.data;
}
