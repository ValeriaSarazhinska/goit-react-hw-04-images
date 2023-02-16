import { useEffect, useState } from 'react';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { ColorRing } from 'react-loader-spinner';
import { Notify } from 'notiflix';
import { getPhotos } from './Api';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(0);

  const handleFormSubmit = name => {
    setName(name);
    setGallery([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevPage => (prevPage + 1));
  };
  useEffect(() => {
    if(!name)return
    const fetchData = async()=> {
      try {
        setLoading(true);
        const { hits, totalHits } = await getPhotos(name, page);

        if (!hits.length) {
          return Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.',
          );
        }
        setGallery(prevGallery => ([...prevGallery, ...hits]));
        setTotalHits(totalHits);
      } catch (error) {
        Notify.failure('Something went wrong');
      } finally {
        setLoading(false);
      }
    }
    fetchData()
  }, [name, page]);

  return (
    <div className='app'>
      <Searchbar onSubmit={handleFormSubmit} />
      {!!gallery.length && <ImageGallery gallery={gallery} />}
      {!loading && !!gallery.length && totalHits !== gallery.length && (
        <Button loadMore={loadMore} />
      )}
      <ColorRing
        visible={loading}
        height='180'
        width='180'
        ariaLabel='blocks-loading'
        wrapperClass='blocks-wrapper'
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
    </div>
  );
};
