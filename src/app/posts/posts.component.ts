import { BadRequestError } from './../common/bad-request-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(
        posts => this.posts = posts)
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(JSON.stringify(post))
      .subscribe(
        createdPost => {
          post['id'] = createdPost.id;
        },
        (error: AppError) => {
          this.posts.splice(0, 1);

          if (error instanceof BadRequestError) {
            alert("bad request Error")
            // this.form.setErrors(error.originalError);
          } else throw error;
        });
  }

  updatePost(post) {
    this.service.update(post.id, JSON.stringify({ isRead: true }))
      .subscribe(
        updatedPost => {
          console.log(updatedPost)
        });
  }

  deletePost(post) {
    let indexToDelete = this.posts.indexOf(post);
    this.posts.splice(indexToDelete, 1);

    this.service.delete(post)
      .subscribe(
        () => { },
        (error: AppError) => {
          this.posts.splice(indexToDelete, 0, post);

          if (error instanceof NotFoundError) {
            alert("404 Not Found error");
          } else throw error;
        })
  }
}
