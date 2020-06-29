import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoProcessingUnitSharedModule } from 'app/shared/shared.module';

import { MetricsComponent } from './metrics.component';

import { metricsRoute } from './metrics.route';

@NgModule({
  imports: [VideoProcessingUnitSharedModule, RouterModule.forChild([metricsRoute])],
  declarations: [MetricsComponent],
})
export class MetricsModule {}
