import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopTvPageRoutingModule } from './top-tv-routing.module';

import { TopTvPage } from './top-tv.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopTvPageRoutingModule,
    HttpClientModule
  ],
  declarations: [TopTvPage]
})
export class TopTvPageModule {}
