import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';

import { IndexRoutingModule } from "./index-routing.modeule";
import { IndexComponents } from "./index";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule
  ],
  declarations: [IndexComponent,IndexComponents]
})

export class IndexModule { }
