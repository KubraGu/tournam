import { Component } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

export interface CreateUserResponseDTO {
  id: string;
}

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  providers: [HttpClient]
})
export class UserCreateComponent {
  firstName: string = '';
  lastName: string = '';
  birthDate: Date|null = null;
  email: string = '';
  errorOccurred: string|null = null;
  successMessage: string|null = null; // Ajoutez une propriété pour le message de succès

  constructor(private httpClient: HttpClient,
              private router: Router) {

  }

  onSubmit() {
    console.log('submit user', this.firstName, this.lastName, this.birthDate, this.email);
    let req = {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      email: this.email
    };

    this.errorOccurred = null;
    this.successMessage = null; // Réinitialiser le message de succès à chaque soumission du formulaire

    this.httpClient.post<CreateUserResponseDTO>('/api/users', req)
      .subscribe(
        res => {
          console.log('Done', res);
          this.errorOccurred = null;
          this.successMessage = 'User created successfully!'; // Définir le message de succès lorsque la soumission réussit

        }, err => {
          console.log('Error occurred', err);
          this.errorOccurred = '(' + err.status + ') ' + err.message;
        }
      );
  }
}
