import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NZ_I18N} from 'ng-zorro-antd/i18n';
import {en_US} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {IconsProviderModule} from './icons-provider.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzPopoverModule} from "ng-zorro-antd/popover";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzModalService} from "ng-zorro-antd/modal";
import {ModalService} from "./common-services/modal-service.service";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {NzNotificationService} from "ng-zorro-antd/notification";

registerLocaleData(en);
const PROVIDERS = [NzModalService, ModalService, NzNotificationService]
@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      IconsProviderModule,
      NzLayoutModule,
      NzMenuModule,
      NzAvatarModule,
      NzPopoverModule,
      NzButtonModule,
      NzDropDownModule,
      NzTypographyModule,

    ],
  providers: [{provide: NZ_I18N, useValue: en_US}, ...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
