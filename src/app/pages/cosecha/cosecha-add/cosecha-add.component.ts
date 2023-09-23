import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cosecha-add',
  templateUrl: './cosecha-add.component.html',
  styleUrls: ['./cosecha-add.component.css']
})
export class CosechaAddComponent implements OnInit{

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
    this.routerParams.navigate(['pages/cosecha']);
  }
}
