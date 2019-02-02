import { NgModule } from '@angular/core';

import { StufiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [StufiSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [StufiSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class StufiSharedCommonModule {}
