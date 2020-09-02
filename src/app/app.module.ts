import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './links/links.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { TablesComponent } from './tables/tables.component';
import { ChildtableComponent } from './childtable/childtable.component';
import { RepeatTableComponent } from './repeat-table/repeat-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    CriteriaComponent,
    TablesComponent,
    ChildtableComponent,
    RepeatTableComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
