import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { StufiSharedLibsModule, StufiSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [StufiSharedLibsModule, StufiSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [StufiSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StufiSharedModule {
    static forRoot() {
        return {
            ngModule: StufiSharedModule
        };
    }
}
