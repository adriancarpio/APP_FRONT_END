import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siembra-add',
  templateUrl: './siembra-add.component.html',
  styleUrls: ['./siembra-add.component.css']
})
export class SiembraAddComponent implements OnInit{

  form: FormGroup;
  private routerParams: Router = inject(Router);


  ngOnInit(): void {
    this.form = new FormGroup({
      'idSpecialty': new FormControl(0),
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'description': new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  get f() {
    return this.form.controls;
  }

  navigateToPage() {
    this.routerParams.navigate(['pages/siembra']);
  }
}
