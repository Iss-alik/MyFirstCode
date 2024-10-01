import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ArtComponent } from './pages/art/art.component';
import { StripComponent } from './pages/strip/strip.component';

export const routes: Routes = [
    {path: '', component: MainComponent, pathMatch: 'full'},
    {path: 'art', component: ArtComponent},
    {path: 'strip', component: StripComponent}
];
