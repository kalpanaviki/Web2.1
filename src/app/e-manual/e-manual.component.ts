import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-e-manual',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './e-manual.component.html',
  styleUrls: ['./e-manual.component.scss']
})
export class EManualComponent {
  links: { text: string, href: string }[] = [
    { text: 'Executive Summary', href: '#summary' },
    { text: 'Black tiger shrimp farming - Historical Context', href: '#past' },
    { text: 'Modern Practices', href: '#now' },
    { text: 'Why it is more relevant today?', href: '#relevant' },
    { text: 'Unibio Genetics – Advantages', href: '#genetics' },
    { text: 'Unibio Seed Production Model', href: '#production' },
    { text: 'Quality Assurance', href: '#qa' },
    { text: 'Testing & traceability', href: '#testing' },
    { text: 'Counting & controls', href: '#counting' },
    { text: 'Packing & transport', href: '#packing' },
    { text: 'Pond preparation, water treatment & water culture', href: '#preparation' },
    { text: 'Acclimatisation & stocking', href: '#acclimatisation' },
    { text: 'Happa survival - disclaimer', href: '#happa' },
    { text: 'Water quality monitoring', href: '#water-quality' },
    { text: 'Feeds & feeding', href: '#feeding' },
    { text: 'Routine Sampling', href: '#sampling' },
    { text: 'Partial harvest - context & methods', href: '#partial-harvest' },
    { text: 'Harvest & post-harvest care', href: '#harvest' },
    { text: 'Preparation for Next Crop', href: '#next-crop' }
  ];

  activeLink: string = this.links[0].text;

  setActiveLink(linkHref: string, event: Event) {
    // Prevent the default anchor behavior
    event.preventDefault();
  
    // Set the active link based on the href, not text
    this.activeLink = linkHref;
  
    // Scroll to the section with the matching ID
    const container = document.querySelector('.content') as HTMLElement | null;
    if (container) {
      const element = container.querySelector(linkHref.toLowerCase()) as HTMLElement | null;
      if (element) {
        container.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }
}
  