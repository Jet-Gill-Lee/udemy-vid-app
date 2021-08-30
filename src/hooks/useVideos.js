import { useState, useEffect } from "react";
import youtube from "../APIs/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  //Initial search when no search term provided
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);
  //Searches on form submit
  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };
  return [videos, search];
};

export default useVideos;
