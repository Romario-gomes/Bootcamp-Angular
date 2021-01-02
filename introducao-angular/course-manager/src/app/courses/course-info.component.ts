import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {
    courseId:number;

    constructor(private ActivatedRoute: ActivatedRoute){} 
        
    ngOnInit(): void {
        this.courseId = +this.ActivatedRoute.snapshot.paramMap.get('id');
    }
}