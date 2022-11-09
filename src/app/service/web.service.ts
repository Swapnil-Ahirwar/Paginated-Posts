import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment, Post, User } from '../utils/models';
import { ENDPOINT } from '../utils/app.constant';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(
    private httpClient: HttpClient
  ) { }

  currentElementData: Post | undefined = undefined

  getNotes(page: number): Observable<Post[]>{
    return this.httpClient.get(
      `${ENDPOINT}/posts?page=${page}&limit=5`
    ) as Observable<Post[]>
  }

  getPost(postId: number): Observable<Post> {
    return this.httpClient.get(
      `${ENDPOINT}/posts/${postId}`
    ) as Observable<Post>
  }

  getComment(postId : number): Observable<Comment[]>{
    return this.httpClient.get(
      `${ENDPOINT}/comments?post_id=${postId}`
    )as Observable<Comment[]>
  }

  getUser(userId : number): Observable<User>{
    return this.httpClient.get(
      `${ENDPOINT}/users/${userId}`
    )as Observable<User>
  }
}
