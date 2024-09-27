import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';
  TodoData: any = [];

  constructor(private tutorialService: TutorialService, private router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.retrieveTutorials();
    this.TodoData = JSON.parse(localStorage.getItem('TodoData') || '[]');
  }

  retrieveTutorials(): void {
    let retrievedObject: any = localStorage.getItem('TodoData');
    this.tutorials = JSON.parse(retrievedObject);
  }

  deleteTodo(id: number) {
    for (let i = 0; i < this.TodoData.length; i++) {
      if (i == id) {
        this.TodoData.splice(i, 1);
      }
    }
    localStorage.setItem('TodoData', JSON.stringify(this.TodoData));
    this.cdr.detectChanges();
    this.retrieveTutorials();
  }
}