import { HttpClient } from "./02-open-close-c";
import { PostService } from "./05-dependency-b";
import { WebApiPostServices } from "./05-dependency-c";

// Main
(async () => {
  const httpClient: HttpClient = new HttpClient();
  const provider: WebApiPostServices = new WebApiPostServices(httpClient);
  const postService: PostService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
