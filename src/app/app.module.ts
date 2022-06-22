import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BaseOperatorsComponent } from './components/base-operators/base-operators.component';
import { JoinCreationOperatorsComponent } from './components/join-creation-operators/join-creation-operators.component';
import { HooOperatorsComponent } from './components/hoo-operators/hoo-operators.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseOperatorsComponent,
    JoinCreationOperatorsComponent,
    HooOperatorsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
