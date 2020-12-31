import { Component, OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
    /* template:  '<h2> Course List </h2>' */
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    constructor(private courseService: CourseService) { } 

    ngOnInit(): void {
        this.courses = this.courseService.retriveAll();
    }
}