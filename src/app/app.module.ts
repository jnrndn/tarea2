import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DummyDataComponent } from './dummy-data/dummy-data.component';
import { DummyPipe } from './pipes/dummy.pipe';
import { BiggerDirective } from './directives/bigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    DummyDataComponent,
    DummyPipe,
    BiggerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
