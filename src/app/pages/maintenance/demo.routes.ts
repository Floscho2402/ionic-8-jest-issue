import { Route } from '@angular/router';
import { DemoComponent } from '@app/pages/maintenance/components/demo/demo.component';

export default [
  {
    path: '',
    data: {
      title: 'PAGES.MAINTENANCE.CONTENT.TAB_TITLE'
    },
    component: DemoComponent
  }
] as Route[];
