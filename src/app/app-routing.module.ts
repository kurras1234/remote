import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "student",
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
   },
   { path: '', redirectTo:'student', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
