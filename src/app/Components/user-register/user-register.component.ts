import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, ReactiveFormsModule,FormsModule }  from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.scss',
})
export class UserRegisterComponent implements OnInit {
  userRegisterFormGroup: FormGroup;
  /**
   *
   */
  constructor(private fb:FormBuilder) {

    // another way to define the form 
    this.userRegisterFormGroup = fb.group({
      name: ['' , [Validators.required , Validators.minLength(3)]],
      email: [''],
      mobileNo: [''],
      address: fb.group({
        street: [''],
        postalCode: [''],
      }),
      password:[''],
      confirmPassword:[''],
      reachedBy: [''],
      reachedByOther: [''],
    });
    
    // define the form 
    /*
    this.userRegisterFormGroup = new FormGroup({
      name: new FormControl('' , [Validators.required , Validators.minLength(3)]),
      email: new FormControl(''),
      mobileNo: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        postalCode: new FormControl(''),
      }),
      password:new FormControl(''),
      confirmPassword:new FormControl(''),
      reachedBy: new FormControl(''),
      reachedByOther: new FormControl(''),
    });
    */

  }
  ngOnInit(): void {
    // if we want to fill form when before page loaded 
    //this.userRegisterFormGroup.setValue({ "name": "Ahmed Abdelsalam", "email": "ahmed.ragab@nt-me.com", "mobileNo": "01111111111111", "address": { "street": "test", "postalCode": "dsdsd" }, "password": "sdsdsdsdsd", "confirmPassword": "dfsdfsdfsfsfsf", "reachedBy": "Facebook", "reachedByOther": "Ahmed Abdelsalam Ragab" });
  }

  register()
  {

  }

  // to can using it in validation in ui
  get name(){
    return this.userRegisterFormGroup.controls['name'];
  }

}
