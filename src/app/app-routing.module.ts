import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseOperatorsComponent } from './components/base-operators/base-operators.component';
import { JoinCreationOperatorsComponent } from './components/join-creation-operators/join-creation-operators.component';
import { HooOperatorsComponent } from './components/hoo-operators/hoo-operators.component';

const appRoutes: Routes = [
  { path: 'base-operators', component: BaseOperatorsComponent },
  {
    path: 'join-creation-operators',
    component: JoinCreationOperatorsComponent,
  },
  { path: 'hoo-operators', component: HooOperatorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
