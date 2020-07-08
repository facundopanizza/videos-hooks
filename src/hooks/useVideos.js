import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        key: 'AIzaSyDF-OfCI34n_fxO7ZQQHR9Wf4FYq0ILekA',
        maxResults: 5,
        part: 'snippet',
        type: 'video',
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
