import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AboutComponent} from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'contact', component:ContactsComponent},
  {path: 'skills', component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
