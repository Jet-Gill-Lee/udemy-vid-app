import axios from "axios";
const KEY = "AIzaSyDcY8T7Is-3j2KJJP_oVSRgnzmxCEUrKQc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
