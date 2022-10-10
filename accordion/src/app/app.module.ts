import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CopiedAccordionComponent } from './copied-accordion/copied-accordion.component';
import { AccordionDrillComponent } from './accordion-drill/accordion-drill.component';

@NgModule({
  declarations: [
    AppComponent,
    CopiedAccordionComponent,
    AccordionDrillComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
