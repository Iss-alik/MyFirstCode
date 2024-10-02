import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CharactersComponent } from './pages/characters/characters.component';

export const routes: Routes = [
    {path: '', component: MainComponent, pathMatch: 'full'},
    {path: 'characters', component: CharactersComponent}
];
