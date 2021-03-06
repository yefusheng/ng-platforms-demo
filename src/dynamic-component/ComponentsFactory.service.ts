
import { Injectable }           from '@angular/core';

import {compoentItem} from "./compoentItem";
import {ExePlatformService} from "ng-platforms";
import {exeUploadFileWechatComponent} from "./fileUpload/wechat/UploadFileWechat.component";
import {exeUploadFileNativeComponent} from "./fileUpload/native/UploadFileNative.component";
import {exeUploadFilePcComponent} from "./fileUpload/pc/UploadFilePc.component";
// import {log} from "ng-platforms";
/**
 * 动态组件提供商
 * @author yefs
 */
@Injectable()
export class ComponentsFactoryService{
  constructor(
   public platformService:ExePlatformService
  ){
  }

  getUploadComponent() {

   let uploadCompoents= [
     new compoentItem(exeUploadFileNativeComponent, {name: 'exeUploadFileNativeComponent'}),
     new compoentItem(exeUploadFilePcComponent, {name: 'exeUploadFilePcComponent'}),
     new compoentItem(exeUploadFileWechatComponent, {name: 'exeUploadFileWechatComponent'}),
    ]
    // log("platform--"+this.platformService.getPlatformCode());

    return uploadCompoents[this.platformService.getPlatformCode()].component;
  }
}
