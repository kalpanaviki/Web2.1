import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SustainComponent } from './sustain/sustain.component';
import { MediaComponent } from './media/media.component';
import { NewsComponent } from './news/news.component';
import { EventComponent } from './event/event.component';
import { AboutComponent } from './about/about.component';
import { MonodonComponent } from './monodon/monodon.component';
import { ContactComponent } from './contact/contact.component';
import { EManualComponent } from './e-manual/e-manual.component';
import { LearnComponent } from './learn/learn.component';
import { FlipbookComponent } from './flipbook/flipbook.component';


export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'sustain', component: SustainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'media', component: MediaComponent },
  { path: 'news', component: NewsComponent },
  { path: 'event', component: EventComponent },
  { path: 'monodon', component: MonodonComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'e-manual', component: EManualComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'flip', component: FlipbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule], // Export only the RouterModule
})
export class AppRoutingModule {}