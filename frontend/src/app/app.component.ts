import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';
  users: any = [];

  constructor(private userData: UserDataService) {
    userData.users().subscribe((data) => {
      //   console.log(data, 'data');

      this.users = data;
    });
  }
}
