import { Component } from '@angular/core';

@Component({
  selector: 'create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  courseCategories = [
    { id: 1, name: "Development" },
    { id: 2, name: "Art" },
    { id: 3, name: "Science" }
  ]

  createCourse(createCourseForm) {
    console.log(createCourseForm);
    alert("Course created successfully with details" + JSON.stringify(createCourseForm));
  }
}