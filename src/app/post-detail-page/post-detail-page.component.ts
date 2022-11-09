import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment, Post, User } from '../utils/models';
import { WebService } from '../service/web.service';

@Component({
  selector: 'app-post-detail-page',
  templateUrl: './post-detail-page.component.html',
  styleUrls: ['./post-detail-page.component.css']
})
export class PostDetailPageComponent implements OnInit {

  commentDetail: Comment[]=[];
  user: User | undefined ;
  post: Post | undefined;

  constructor(
    private service: WebService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.getComments();
    this.getUserDetail();
    this.getPost();
  }

  getComments(): void{
    let postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.service.getComment(postId)
    .subscribe((commentDetail: Comment[]) => {
      this.commentDetail = commentDetail;
    });
  }

  getUserDetail():void{
    let userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.service.getUser(userId)
    .subscribe((userDetail: User) => {
      this.user = userDetail;
    });
  }

  getPost():void{
    let postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.service.getPost(postId)
    .subscribe((postDetail: Post) => {
      this.post = postDetail;
    });
  }

  goBack(): void{
      this.router.navigateByUrl('/home');
  }

}
