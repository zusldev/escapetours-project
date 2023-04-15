// stories.ts

import axios from "axios";
import cache from "memory-cache";

let stories: any[] = [];

// @ts-ignore
const ACCOUNT_ID = process.env.ACCOUNT_ID;
// @ts-ignore
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const CACHE_KEY = "instagram-stories";

export function getInstagramStories() {
  const cachedData = cache.get(CACHE_KEY);
  if (cachedData) {
    return Promise.resolve(cachedData.stories);
  }

  return axios
    .get(
      "https://graph.facebook.com/" +
        ACCOUNT_ID +
        "/stories?fields=media_url,caption,like_count,permalink,username,comments_count,media_type,timestamp,thumbnail_url&access_token=" +
        ACCESS_TOKEN
    )
    .then((response) => {
      stories = response.data.data;
      cache.put(CACHE_KEY, { stories });
      return stories;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
}

export { stories };
