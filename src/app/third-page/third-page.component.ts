import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: ['./third-page.component.css']
})
export class ThirdPageComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    const phone = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    })

    this.myForm = this.fb.group({
      email: '',
      homePhone: phone,
      cellPhone: phone,
    })

  }
}
