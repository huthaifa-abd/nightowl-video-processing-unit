import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { VideoProcessingUnitSharedModule } from 'app/shared/shared.module';
import { VideoProcessingUnitCoreModule } from 'app/core/core.module';
import { VideoProcessingUnitAppRoutingModule } from './app-routing.module';
import { VideoProcessingUnitHomeModule } from './home/home.module';
import { VideoProcessingUnitEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    VideoProcessingUnitSharedModule,
    VideoProcessingUnitCoreModule,
    VideoProcessingUnitHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    VideoProcessingUnitEntityModule,
    VideoProcessingUnitAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class VideoProcessingUnitAppModule {}
