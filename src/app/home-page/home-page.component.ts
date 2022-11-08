import { Component, OnInit } from '@angular/core';
import { Post } from '../utils/models';
import { PostDetailPageComponent } from '../post-detail-page/post-detail-page.component';
import { WebService } from '../service/web.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  page=1;
  post: Post[]=[];
  filterTerm!: string;
  searchTerm!: string;
  filteredList: Post[] = [];
  serviceName: any;
  
  constructor(
    private service: WebService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(){
    this.service.getNotes(this.page)
    .subscribe((posts: Post[]) => {
      this.post = posts;
    });
  }

  onScroll(): void{
    this.service.getNotes(++this.page)
    .subscribe((post: Post[]) => {
      this.post.push(...post);
      console.log(this.page);
    });
  }

  onclick(postId: number, userId: number){
    this.router.navigate(['/detail', postId, userId]);
  }

}