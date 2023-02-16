import axios from 'axios';
const key = '32755907-d4f027b877d70172cdb830bb2';
const URL = `https://pixabay.com/api/?key=${key}&q=`;

export const getPhotos = async (name, page) => {
  try {
    const responce = await axios.get(
      `${URL}${name}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    );
    const {hits, totalHits } = responce.data
    const pictures = hits.map(picture => {
     const {id, webformatURL, largeImageURL, tags} = picture
      return {id, webformatURL, largeImageURL, tags}
    })

    return {totalHits, hits: pictures };
  } catch (error) {
    console.log(error);
  }
};
