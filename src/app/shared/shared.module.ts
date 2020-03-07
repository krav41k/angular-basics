import {NgModule} from '@angular/core';
import {ColorDirective} from './color.directive';
import {PageNamePipe} from './page-name.pipe';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    ColorDirective,
    PageNamePipe
  ],
  exports: [
    ColorDirective,
    PageNamePipe,
  ]
})
export class SharedModule {

}
