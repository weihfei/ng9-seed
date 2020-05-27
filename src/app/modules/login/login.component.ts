import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    // 表单脏检查
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    // 登录成功，跳转到首页
    if(this.validateForm.valid) {
      let userInfo = {'userName':this.validateForm.value.userName}; // 保存用户信息
      localStorage.setItem('userInfo',JSON.stringify(userInfo)); // 将用户信息存入localstroage
      this.router.navigate(['index']); // 跳转到主页
    }
  }

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
