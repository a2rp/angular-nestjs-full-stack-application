import { Component } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  users: any = [];
  updateUser: any = [];
  displayUpdateForm = false;

  constructor(private userData: UserDataService, private http: HttpClient) {
    userData.users().subscribe((data) => {
      //   console.log(data, 'table data');

      this.users = data;
    });
  }

  delete(userId: string, userName: string) {
    this.hideEditForm();

    if (
      window.confirm('Are you sure you want to delete ' + userName + ' ???')
    ) {
      const filteredUsers = this.users.filter(function (user: any) {
        return user.id !== userId;
      });
      //   console.warn(userId, userName, 'deleted');
      this.users = filteredUsers;
      //   console.log(this.users);

      this.userData.deleteUser(userId).subscribe((result) => {
        console.log(result);
        // window.location.reload();
      });
    }
  }

  generate = true;
  download = false;
  view = false;
  generatePDF() {
    console.log('generating pdf');

    try {
      this.userData.generatePDF().subscribe((result) => {
        console.log(result);
      });
      this.download = true;
      this.view = true;
    } catch (error) {
      console.log(error);
    }
  }

  downloadPDF() {
    console.log('download pdf');

    try {
      this.userData.downloadPDF().subscribe({
        next: (n) => {
          console.log('pdf download next', n);
          const blob = new Blob([n], { type: 'application/pdf' });
          try {
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            if (link.download !== undefined) {
              // feature detection
              link.setAttribute('href', url);
              link.setAttribute('download', 'users.pdf');
              link.style.visibility = 'hidden';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }
            this.download = false;
          } catch (e) {
            console.error('BlobToSaveAs error', e);
          }
        },
        error: (error) => {
          console.log('pdf download error', error.message);
        },
        complete: () => {},
      });
    } catch (error) {
      console.log(error);
    }
  }

  viewPDF() {
    console.log('view pdf');

    try {
      this.userData.downloadPDF().subscribe({
        next: (n) => {
          console.log('pdf download next', n);
          const blob = new Blob([n], { type: 'application/pdf' });
          try {
            const url = window.URL.createObjectURL(blob);
            window.open(url);
            this.view = false;
          } catch (e) {
            console.error('BlobToSaveAs error', e);
          }
        },
        error: (error) => {
          console.log('pdf download error', error.message);
        },
        complete: () => {},
      });
    } catch (error) {
      console.log(error);
    }
  }

  editFlag = false;
  editButtonClick(user: any) {
    this.editFlag = true;
    this.updateUser = { ...user };
    console.log(this.updateUser, 'update initial value');
  }

  isEmail(emailAdress: string) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex)) return true;
    else return false;
  }

  nameError = '';
  phoneError = '';
  addressError = '';
  disableButton = false;
  updateUserFormData(): any {
    // console.log(data, this.updateUser);

    this.nameError = '';
    if (this.updateUser.name.trim().length < 3) {
      this.nameError = 'name >=3 required';
      return;
    }

    this.phoneError = '';
    if (
      this.updateUser.phone.trim().length < 10 ||
      this.updateUser.phone.trim().length > 15
    ) {
      this.phoneError = 'phone length must be between 10 and 15 characters';
      return;
    }

    this.addressError = '';
    if (
      this.updateUser.address.trim().length < 11 ||
      this.updateUser.address.trim().length > 100
    ) {
      this.addressError =
        'address length must be between 10 and 100 characters';
      return;
    }

    this.disableButton = true;
    this.userData.updateUser(this.updateUser).subscribe({
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

  hideEditForm() {
    this.editFlag = false;
    this.updateUser = {};
  }
}
