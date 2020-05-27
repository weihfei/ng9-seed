import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NzMessageService } from 'ng-zorro-antd';
import { UserInfo } from "./services/index.service";


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  isCollapsed = false;
  userInfo:UserInfo; // 保存用户信息

  code:string = `
  let aa:string = '123';
  `

  // 获取用户信息
  getUserInfo() {
     if(localStorage.getItem('userInfo')) {
       this.userInfo = JSON.parse(localStorage.getItem('userInfo')); // 保存用户信息
       console.log(this.userInfo);
     } else {
        this.nzMessageService.error('请先登录！').onClose.subscribe(()=> {
          this.router.navigate(['login'])
        })
     }
  }

  constructor(
    private router: Router,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {
    this.getUserInfo(); // 获取用户信息
  }

}