import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrevisaoDoTempoComponent } from './components/previsao-do-tempo/previsao-do-tempo.component';

const appRoutes: Routes = [
  { path: 'previsao', component: PrevisaoDoTempoComponent },
  {
    path: '',
    redirectTo: '/previsao',
    pathMatch: 'full'
  },
  { path: '**', component: PrevisaoDoTempoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PrevisaoDoTempoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
