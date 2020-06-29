import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoProcessingUnitSharedModule } from 'app/shared/shared.module';

import { GatewayComponent } from './gateway.component';

import { gatewayRoute } from './gateway.route';

@NgModule({
  imports: [VideoProcessingUnitSharedModule, RouterModule.forChild([gatewayRoute])],
  declarations: [GatewayComponent],
})
export class GatewayModule {}
