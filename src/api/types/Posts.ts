export interface Posts {
  id: string;
  username: string;
  caption: string;
  media_url: string;
  comments_count: number;
  like_count: number;
  media_type: string;
  permalink: string;
  children?: {
    media_url: string;
    media_type: string;
  }[];
  timestamp: string;
  comments?: {
    like_count: number;
    username: string;
    text: string;
    timestamp: string;
  }[];
}
