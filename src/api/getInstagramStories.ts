// stories.ts

import axios, { type AxiosResponse } from "axios";
import cache from "memory-cache";
import type { Stories } from "./types/Stories";

let stories: Stories[] = [];

// @ts-ignore
const ACCOUNT_ID = process.env.ACCOUNT_ID;
// @ts-ignore
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const CACHE_KEY = "instagram-stories";

export async function getInstagramStories() {
  const cachedData = cache.get(CACHE_KEY);
  if (cachedData) {
    return Promise.resolve(cachedData.stories);
  }

  const response: AxiosResponse<{ data: Stories[] }> = await axios.get(
    `https://graph.facebook.com/${ACCOUNT_ID}/stories?fields=media_url,caption,like_count,permalink,username,comments_count,media_type,timestamp,thumbnail_url&access_token=${ACCESS_TOKEN}`
  );
  stories = response.data.data;
  cache.put(CACHE_KEY, { stories });
  return Promise.resolve(stories);
}

export { stories };
