import {
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Injectable,
  StreamableFile,
} from '@nestjs/common';
import { User } from './data/user.dto';
import { v4 as uuidv4 } from 'uuid';
import { createReadStream } from 'fs';
const fs = require('fs-extra');
const path = require('path');
const pdf = require('pdf-creator-node');

@Injectable()
export class UserService {
  constructor() {
    this.initialFunc();
  }

  public users: User[] = [];
  initialFunc() {
    fs.readFile(
      path.resolve(__dirname, '../../src/user/userDetails.json'),
      'utf8',
      (err, data) => {
        if (err) throw err;
        this.users = JSON.parse(data);
      },
    );
  }

  //   find all users
  findAllUsersService(): User[] {
    return this.users;
  }

  //   add user
  addUserService(user: User): string {
    const found = this.users.some((el) => el.email === user.email);
    console.log(found, 'found');

    if (found) return 'exists';

    user.id = uuidv4();
    this.users.push(user);

    const jsonContent = JSON.stringify(this.users);
    fs.writeFile(
      path.resolve(__dirname, '../../src/user/userDetails.json'),
      jsonContent,
      'utf8',
      function (err) {
        if (err) {
          return console.log(err);
        }
      },
    );
    return 'success';
  }

  //   update user
  updateUserService(user: User): string {
    let index = this.users.findIndex(
      (currentUser) => currentUser.id === user.id,
    );
    this.users[index] = user;
    // console.log(this.users);

    const jsonContent = JSON.stringify(this.users);
    fs.writeFile(
      path.resolve(__dirname, '../../src/user/userDetails.json'),
      jsonContent,
      'utf8',
      function (err) {
        if (err) {
          return console.log(err);
        }
      },
    );

    console.log('updation successful');
    return 'success';
  }

  //   delete user
  deleteUserService(userId: string): string {
    // console.log('trying to delete');
    this.users = this.users.filter((user) => user.id !== userId);

    const jsonContent = JSON.stringify(this.users);
    fs.writeFile(
      path.resolve(__dirname, '../../src/user/userDetails.json'),
      jsonContent,
      'utf8',
      function (err) {
        if (err) {
          return console.log(err);
        }
      },
    );

    // console.log('user deleted');
    return 'User has been deleted';
  }

  //   generate pdf
  generatePDFService(): boolean {
    console.log('generating pdf');

    const html = fs.readFileSync(
      path.resolve(__dirname, '../../src/user/userDetails.html'),
      'utf8',
    );

    const options = {
      format: 'A3',
      orientation: 'portrait',
      border: '20mm',
      header: {
        height: '55mm',
        contents:
          '<div style="text-align: center;">a2rp: an Ashish Ranjan presentation</div>',
      },
      footer: {
        height: '28mm',
        contents: {
          first: 'Cover page',
          2: 'Second page', // Any page number is working. 1-based index
          default:
            '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
          last: 'Last Page',
        },
      },
    };

    var document = {
      html: html,
      data: {
        users: this.users,
      },
      path: path.resolve(__dirname, '../../src/user/userDetails.pdf'),
      type: '',
    };
    // By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

    if (
      fs.existsSync(path.resolve(__dirname, '../../src/user/userDetails.pdf'))
    ) {
      // Do something
      fs.unlink(
        path.resolve(__dirname, '../../src/user/userDetails.pdf'),
        function (error) {
          if (error) {
            console.log('unlink error occurred', error);
            return false;
          }
        },
      );
    }

    pdf
      .create(document, options)
      .then((res) => {
        console.log(res);
        return 'pdf generated successfully';
      })
      .catch((error) => {
        console.error(error);
        return 'pdf generation error: ' + error.message;
      });
    return true;
  }

  //   download pdf
  downloadPdf(): StreamableFile {
    const file = createReadStream(
      path.resolve(__dirname, '../../src/user/userDetails.pdf'),
    );
    return new StreamableFile(file);
  }

  //   view pdf
  viewPdf(): StreamableFile {
    const file = createReadStream(
      path.resolve(__dirname, '../../src/user/userDetails.pdf'),
    );
    return new StreamableFile(file);
  }
}
