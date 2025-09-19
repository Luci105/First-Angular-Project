import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CoreConceptsComponent } from './core-concepts/core-concepts.component';
import { FormComponent } from './form/form.component';
import { HttpRoutingComponent } from './http-routing/http-routing.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { MaterialComponent } from './material/material.component';

export const routes: Routes = [
    {
        path : '' , component : FirstComponentComponent
    },
    {
        path: "data", component: DataBindingComponent
    },
    {
        path: "core", component: CoreConceptsComponent
    },
    {
        path: "form", component: FormComponent
    },
    {
        path : "users",component : HttpRoutingComponent
    },
    {
        path : "material",component : MaterialComponent
    }
];
