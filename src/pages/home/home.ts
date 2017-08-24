import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';

import {ExePlatformService} from "ng-platforms";
import {StorageService} from "ng-platforms";
import {LoggerService} from "ng-platforms";
import {AuthService} from "ng-platforms";
// import {AuthService} from "../../../../src/Auth.service";
/**
 * demo
 * 1.图片上传跨平台
 * 2.本地存储跨平台
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage    implements OnInit{
  userUrl: string = "https://tests.exexm.com:800";

  uploadUrl = this.userUrl + "/api/User/Picture/V2";
  uploadinfo:any={
    imageUrl:"test",
    serverUrl:this.uploadUrl
  };
  platfromName:string="";
  constructor(private storageService:StorageService,
              private  exePlatformService:ExePlatformService,
              private  loggerService:LoggerService,
              private authService :AuthService
  ) {
    this.uploadinfo.serverUrl=this.uploadUrl;

    this.loggerService.log("serverUrl"+this.uploadinfo.serverUrl);
  }
  ngOnInit(): void {
    this.authService.setToken("abc");
    this.storageService.saveObject("userInfo",this.uploadinfo);

    this.storageService.getObject("userInfo",this.uploadinfo);

    // this.loggerService.log("getObject",this.uploadinfo.imageUrl);
    this.platfromName=this.exePlatformService.getPlatformName()+"";
  }

}
