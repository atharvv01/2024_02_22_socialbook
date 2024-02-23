// post.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private allPosts = [
    // Your array of posts goes here
  ];

  getPosts(startIndex: number, count: number): any[] {
    return this.allPosts.slice(startIndex, startIndex + count);
  }
}