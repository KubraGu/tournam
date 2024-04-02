import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'; // Import NgForm

interface CreateUserRequestDTO {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
}

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
})
export class UserCreateComponent {
  constructor(private httpClient: HttpClient) {}

  onSubmit(userForm: NgForm) { // Use NgForm type for userForm parameter
    const formData: CreateUserRequestDTO = userForm.value;
    
    this.httpClient.post<any>('/api/users', formData)
      .subscribe(
        response => {
          console.log('User created successfully:', response);
          // Optionally, you can reset the form after successful submission
          userForm.reset();
        },
        error => {
          console.error('Error creating user:', error);
          // Handle error if needed
        }
      );
  }
}
