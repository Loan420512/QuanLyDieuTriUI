import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  login() {
    if (this.email && this.password) {
      // Gọi API thật tại đây nếu có
      alert(`Đăng nhập thành công với email: ${this.email}`);
    } else {
      alert('Vui lòng nhập đầy đủ email và mật khẩu.');
    }
  }
}
