# TheGreatLandingPage

Front-end practice

## Creating a new landing page

1. Generate a new module  
   a. `ng generate module <name> --routing` or `ng g m <name> --routing` to create module
2. In **app.module.ts** import module  
   a. `import { <name>Module } from './<name>/<name>.module';`  
   b. In imports add: `<name>Module`  
3. Give a route to the module and its child components. In **app-routing.module.ts**  
   a. In Routes = []: `{ path: '<name>', loadChildren: () => import('./<name>/<name>.module').then(m => m.<name>Module) }`
4. Generate components for module  
   a. `ng g c <name>/<name>landing`  
   b. `ng g c <name>/<name>header`  
   c. `ng g c <name>/<name>footer`  
5. When arriving to module, let the blank path be the landing page. In **`<name>-routing.module.ts`**  
   a. `import { <name>landingComponent } from './<name>landing/<name>landing.component';`  
   b. `{ path: '', component: <name>landingComponent }`
6. Add components to landing page of module. In **`<name>landing.component.html`** add sub components  
   a. `<app-header></app-header>`  
   b.`<app-footer></app-footer>`  
7. Add routerLink to **landing.component.html**  
   a. `<a routerLink="/<name>"><NAME></a>`
8. localhost:4200 will load the landingcomponent with the routerLink you added to this landing page (step 7)
9. Check link if module will load all components (header, landing, footer) (step 3 & step 4)

**When importing, name must be in PascalCase**

## Starting Project

1. `cd client`
2. `npm run start`
