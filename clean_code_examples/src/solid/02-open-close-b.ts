import { HttpClient } from "./03-open-close-c";

export class TodoService {
  constructor(private readonly httpClient: HttpClient) {}

  async getTodoItems() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/todos/"
    );
    return data;
  }
}

export class PostService {
  constructor(private readonly httpClient: HttpClient) {}

  async getPosts() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
  }
}

export class PhotosService {
  constructor(private readonly httpClient: HttpClient) {}

  async getPhotos() {
    const { data } = await this.httpClient.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    return data;
  }
}
