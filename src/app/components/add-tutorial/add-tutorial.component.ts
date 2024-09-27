import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    title: '',
    description: '',
    duedate: '',
    attachment: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService, private router: Router, private _Activatedroute: ActivatedRoute,) { }
  id: any = '';
  @ViewChild("login") form: any;

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.params['id'];
    if (this.id) {
      let todos: any = JSON.parse(localStorage.getItem('TodoData') || '[]');
      this.tutorial = todos.find((p: any, i: any) => i == this.id);
    }
  }

  saveTutorial(login: NgForm): void {
    if (this.form.value) {
      let Tdata = JSON.parse(localStorage.getItem('TodoData') || '[]');
      const data: any = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        duedate: this.tutorial.duedate,
        attachment: this.tutorial.attachment,
      };

      if (this.id) {
        for (let i = 0; i < Tdata.length; i++) {
          if (i == Number(this.id)) {
            Tdata[i] = data;
          }
        }
        localStorage.setItem('TodoData', JSON.stringify(Tdata));
        this.router.navigate(['/tutorials']);
      } else {
        Tdata.push(data);
        localStorage.setItem('TodoData', JSON.stringify(Tdata));
        login.reset();
        this.router.navigate(['/tutorials']);
      }
    }
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false,
      duedate: '',
      attachment: '',
    };
  }

}