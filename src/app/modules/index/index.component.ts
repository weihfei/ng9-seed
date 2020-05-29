import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
import { NzMessageService } from 'ng-zorro-antd';
import { UserInfo } from "./services/index.service";




@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

  isCollapsed = false;
  userInfo:UserInfo; // 保存用户信息
  showCode:boolean = false;

  code:string = `
   <div><i class="icon"></i></div>
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

  showCodeFn():void {
    this.showCode = !this.showCode;
  }

  constructor(
    private router: Router,
    private nzMessageService: NzMessageService
  ) { }

  ngOnInit() {

    this.getUserInfo(); // 获取用户信息
  }

  ngAfterViewInit() {
    
  }

}
