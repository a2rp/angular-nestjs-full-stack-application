import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  constructor(private userData: UserDataService) {}

  isEmail(emailAdress: string) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex)) return true;
    else return false;
  }

  nameError = '';
  emailError = '';
  phoneError = '';
  addressError = '';
  disableButton = false;
  getUserFormData(data: any): any {
    this.nameError = '';
    if (data.name.trim().length < 3) {
      this.nameError = 'name >=3 required';
      return;
    }

    this.emailError = '';
    if (!this.isEmail(data.email)) {
      this.emailError = 'invalid email';
      return;
    }

    this.phoneError = '';
    if (data.phone.trim().length < 10 || data.phone.trim().length > 15) {
      this.phoneError = 'phone length must be between 10 and 15 characters';
      return;
    }

    this.addressError = '';
    if (data.address.trim().length < 11 || data.address.trim().length > 100) {
      this.addressError =
        'address length must be between 10 and 100 characters';
      return;
    }

    this.disableButton = true;
    this.userData.saveUser(data).subscribe({
      next: (n: any) => {
        if (n.success === false) {
          alert(n.message);
        } else {
          alert(n.message);
          window.location.reload();
        }
      },
      error: (e) => {
        console.log(e, 'error');
        alert('error: ' + e.message);
      },
      complete: () => {
        console.log('complete');
        this.disableButton = false;
      },
    });
  }
}
