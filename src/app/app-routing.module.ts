import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'list-produtos',
    loadChildren: () => import('./paginas/list-produtos/list-produtos.module').then( m => m.ListProdutosPageModule)
  },
  {
    path: 'list-usuaarios',
    loadChildren: () => import('./paginas/list-usuaarios/list-usuaarios.module').then( m => m.ListUsuaariosPageModule)
  },
  {
    path: 'cadastro-produtos',
    loadChildren: () => import('./paginas/cadastro-produtos/cadastro-produtos.module').then( m => m.CadastroProdutosPageModule)
  },
  {
    path: 'cadastro-usuarios',
    loadChildren: () => import('./paginas/cadastro-usuarios/cadastro-usuarios.module').then( m => m.CadastroUsuariosPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./paginas/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
