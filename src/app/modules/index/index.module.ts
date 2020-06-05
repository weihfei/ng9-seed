import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';
import { MarkdownModule } from 'ngx-markdown';

import { IndexRoutingModule } from "./index-routing.modeule";
import { IndexComponents } from "./index";
import { IndexServices } from "./services/index";

import { NzHighlightComponent } from "../../shares/components/heightlight/heightlight";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzPageHeaderModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
    NzAvatarModule,
    NzBadgeModule,
    NzMessageModule,
    NzDropDownModule,
    NzHighlightModule,
    MarkdownModule.forChild()
  ],
  declarations: [IndexComponent,IndexComponents, NzHighlightComponent],
  providers: [IndexServices]
})

export class IndexModule { }
