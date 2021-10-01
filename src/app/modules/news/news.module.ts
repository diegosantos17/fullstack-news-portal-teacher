import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from 'src/app/shared/models/modules/shared.module';
import { NewsDetailComponent } from './news-detail/news-detail.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NewsModule { }
