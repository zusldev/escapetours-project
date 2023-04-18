import axios, { type AxiosResponse } from "axios";
import cache from "memory-cache";
import type { Posts } from "./types/Posts";

let postsApi: Posts[] = [];
let videoPostsApi: Posts[] = [];

// @ts-ignore
const ACCOUNT_ID = process.env.ACCOUNT_ID;
// @ts-ignore
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

const CACHE_KEY = "instagram-feed";

export async function getInstagramFeed() {
  try {
    const cachedData = cache.get(CACHE_KEY);
    if (cachedData) {
      postsApi = cachedData.postsApi;
      videoPostsApi = cachedData.videoPostsApi;
    } else {
      const response: AxiosResponse<{ data: Posts[] }> = await axios.get(
        `https://graph.facebook.com/${ACCOUNT_ID}/media?fields=id,username,caption,media_url,comments_count,like_count,media_type,permalink,children{media_url,media_type},timestamp,comments.limit(10)%7Blike_count,username,text,timestamp%7D&access_token=${ACCESS_TOKEN}`
      );

      postsApi = response.data.data;
      videoPostsApi = postsApi.filter((post) => post.media_type === "VIDEO");
      postsApi = postsApi.filter(
        (post) =>
          post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
      );
      cache.put(CACHE_KEY, { postsApi, videoPostsApi });
    }
  } catch (error) {
    console.log(error);
  }
}

export function getPosts(): Promise<Posts[]> {
  const cachedData = cache.get(CACHE_KEY);
  if (cachedData) {
    return Promise.resolve(
      cachedData.postsApi.filter(
        (post) =>
          post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
      )
    );
  } else {
    const filteredPosts = postsApi.filter(
      (post) =>
        post.media_type === "IMAGE" || post.media_type === "CAROUSEL_ALBUM"
    );
    return Promise.resolve(filteredPosts);
  }
}

export function getVideoPosts(): Promise<Posts[]> {
  const cachedData = cache.get(CACHE_KEY);
  if (cachedData) {
    return Promise.resolve(
      cachedData.videoPostsApi.filter((post) => post.media_type === "VIDEO")
    );
  } else {
    const filteredVideoPosts = videoPostsApi.filter(
      (post) => post.media_type === "VIDEO"
    );
    return Promise.resolve(filteredVideoPosts);
  }
}
