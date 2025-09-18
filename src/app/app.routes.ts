import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CoreConceptsComponent } from './core-concepts/core-concepts.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {
        path: "home", component: HomeComponent
    },
    {
        path: "data", component: DataBindingComponent
    },
    {
        path: "core", component: CoreConceptsComponent
    },
    {
        path: "form", component: FormComponent
    }
];
