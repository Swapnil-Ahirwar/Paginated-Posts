import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private service: WebService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.getComments();
    this.getUserDetail();
  }

  getComments(): void{
    let postId = Number(this.route.snapshot.paramMap.get('postId'));
    this.service.getComment(postId)
    .subscribe((commentDetail: Comment[]) => {
      this.commentDetail = commentDetail;
      console.log("comment detail", commentDetail);
    });
  }

  getUserDetail():void{
    let userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.service.getUser(userId)
    .subscribe((userDetail: User) => {
      this.user = userDetail;
      console.log("user detail", userDetail);
    });
  }

}
