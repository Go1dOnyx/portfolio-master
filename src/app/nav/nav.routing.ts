import { Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { ProjectComponent } from './project';
import { ErrorComponent } from './error';

const routes : Routes = [
    {path: '', component : HomeComponent},
    {path: 'about', component : AboutComponent},
    {path: 'project', component : ProjectComponent},
    

    //otherwise for all other paths
    {path: '**', component : ErrorComponent}
];

export const navRoutes = RouterModule.forRoot(routes);

