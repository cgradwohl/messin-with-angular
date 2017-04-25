// every component must include core
import { Component } from '@angular/core';
import {PostService} from '../services/post.service';

// html compponent constructor
@Component({
  // allows relatice path for template url
  moduleId: module.id,

  // html tag name and selector
  selector: 'user',

  // es6 template literal using backtick
  // nice example of interploation bellow
  // we use data binding with ngModel to bind data to the dudename property
  templateUrl: 'user.component.html',
  providers: [PostService],
})

// Component() class
// handles the data to be feed to the html
export class UserComponent  {
    dudename: string;
    email: string;
    // note address is an object with several fields associated with it. To declare a type to an object we can create an interface.
    address: address;
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    // runs everytime this component is rendered
    constructor(private postService: PostService) {
        this.dudename = 'John Doe';
        this.email = 'john@gmail.com';
        this.address = {
            street: '12 main street',
            city: 'Boston',
            state: 'MA'
        };
        this.hobbies = ['music', 'sports', 'math'];
        this.showHobbies = false;

        this.postService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    // component methods can be added like so:
    toggleHobbies() {
        this.showHobbies = !this.showHobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby);
    }

    deleteHobby(index) {
        this.hobbies.splice(index, 1);
    }
}

// interface allows you to define custom types
interface address {
    street: string;
    city: string;
    state: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}
