import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <div class="card">
    <div class="card-header pointer" (click)="showBody = !showBody" style="cursor: pointer;">Courses Component</div>
    <div class="card-body" *ngIf="showBody">
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses"> {{course}}</li>
    </ul>
    <div>
    <div>
    `
})
export class CoursesComponent {
    title = "List of courses :";
    courses;

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
    getTitle() {
        return this.title;
    }
}