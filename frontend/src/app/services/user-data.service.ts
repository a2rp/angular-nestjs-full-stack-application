import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  url = 'http://localhost:3000/user/all';
  constructor(private http: HttpClient) {}

  users() {
    return this.http.get(this.url);
  }

  saveUser(data: any) {
    const url = 'http://localhost:3000/user/add';
    return this.http.post(url, data);
  }

  deleteUser(userId: string) {
    const url = `http://localhost:3000/user/delete/${userId}`;
    return this.http.delete(url);
  }

  updateUser(data: any) {
    const url = 'http://localhost:3000/user/update';
    return this.http.put(url, data);
  }

  generatePDF() {
    const url = `http://localhost:3000/user/generate-pdf`;
    return this.http.get(url);
  }

  downloadPDF() {
    const url = `http://localhost:3000/user/download-pdf`;
    return this.http.get(url, { responseType: 'arraybuffer' });
  }
}
