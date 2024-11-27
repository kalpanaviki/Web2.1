import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from '../news/news.component';
import { EventComponent } from '../event/event.component';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, NewsComponent, EventComponent],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'] // Note the change from 'styleUrl' to 'styleUrls'
})
export class MediaComponent {
  selectedMenuItem: string = 'news'; // Default menu item

  selectMenuItem(menuItem: string) {
    this.selectedMenuItem = menuItem;
  }
}