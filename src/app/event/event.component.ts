import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  // Image galleries for different accordion sections
  galleries = [
    {
      title: 'Shrimp Summit 2024 Delegates pre-conference tour to Unibio (India) Hatcheries Pvt Ltd. located at Mugaiyur',
      images: [
        { src: '../assets/images/SS_1.jpeg', alt: 'Image 1'},
        { src: '../assets/images/SS_2.jpeg', alt: 'Image 2'},
        { src: '../assets/images/SS_3.jpeg', alt: 'Image 3'},
        { src: '../assets/images/SS_4.jpeg', alt: 'Image 4'},
        { src: '../assets/images/SS_5.jpeg', alt: 'Image 5'},
      ],
    },
    {
      title: 'Farmers Meet in Pattukottai on 13/04/2024',
      images: [
        { src: 'assets/images/Pat_1.jpeg', alt: 'Image 1' },
        { src: 'assets/images/Pat_2.jpeg', alt: 'Image 2' },
        { src: 'assets/images/Pat_3.jpeg', alt: 'Image 3' },
        { src: 'assets/images/Pat_4.jpeg', alt: 'Image 4' },
        { src: 'assets/images/Pat_6.jpeg', alt: 'Image 6' },
        { src: 'assets/images/Pat_7.jpeg', alt: 'Image 7' },
        { src: 'assets/images/Pat_8.jpeg', alt: 'Image 8' },
        { src: 'assets/images/Pat_9.jpeg', alt: 'Image 9' },
      ]
    },

    {
      title: 'Farmers Meet in Velankanni on 12/04/2024',
      images: [
        { src: 'assets/images/Vel_6.jpeg', alt: 'Image 6' },
        { src: 'assets/images/Vel_1.jpeg', alt: 'Image 1' },
        { src: 'assets/images/Vel_7.jpeg', alt: 'Image 7' },
        { src: 'assets/images/Vel_2.jpeg', alt: 'Image 2' },
        { src: 'assets/images/Vel_3.jpeg', alt: 'Image 3' },    
      ]
    },
  ];

  selectedImage: any = null;
  modalOpen = false;
  isAccordionOpen = Array(this.galleries.length).fill(true);

  openModal(image: any) {
    this.selectedImage = image;
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  toggleAccordion(index: number) {
    this.isAccordionOpen[index] = !this.isAccordionOpen[index];
  }
}
