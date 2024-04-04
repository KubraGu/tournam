import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {UserService} from "../user.service";


@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
})
export class UserCreateComponent {
  firstName: string = '';
  lastName: string = '';
  birthDate: Date | null = null;
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) {}


  onSubmit(userForm: NgForm) {
    const formData = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate instanceof Date ? this.birthDate : null,
      email: this.email,
      password: this.password
    };


    this.userService.createUser(formData)
      .subscribe(
        response => {
          console.log('User created successfully:', response);
          alert(`L'utilisateur avec le nom "${formData.firstName}" a bien été créé.`);
          userForm.resetForm();
        },
        error => {
          console.error('Error creating user:', error);
        }
      );
  }
}
