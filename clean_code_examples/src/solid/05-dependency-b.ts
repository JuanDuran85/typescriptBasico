import { PostProvider } from "./05-dependency-c";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export class PostService {
  private posts: Post[] = [];

  constructor(private readonly postProvider: PostProvider<Post>) {}

  public async getPosts(): Promise<Post[]> {
    this.posts = await this.postProvider.getPosts();

    return this.posts;
  }
}
