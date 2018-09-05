import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder, FormGroup, Validators],

})

export class AppComponent {
  
  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';
  constructor(private fb:FormBuilder){
    this.rForm = fb.group ({
      'name' : [null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    });

  }
}
