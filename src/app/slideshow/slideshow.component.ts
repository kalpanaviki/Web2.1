import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowService } from '../slideshow.service';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements AfterViewInit {
  intervalId: any;

  constructor(public slideshowService: SlideshowService) {}

  ngAfterViewInit() {
    // DOM elements should be available here
    this.showSlides(this.slideshowService.slideIndex);
    this.startSlideShow();
  }

  startSlideShow() {
    this.intervalId = setInterval(() => {
      this.plusSlides(1);
    }, 3000); // Change slide every 3 seconds
  }

  plusSlides(n: number) {
    this.showSlides(this.slideshowService.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideshowService.slideIndex = n);
  }

  showSlides(n: number) {
    const slides = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName('dot') as HTMLCollectionOf<HTMLElement>;

    if (!slides || slides.length === 0) {
      console.error('Slides are not available yet');
      return;
    }

    if (n > slides.length) { this.slideshowService.slideIndex = 1; }
    if (n < 1) { this.slideshowService.slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[this.slideshowService.slideIndex - 1].style.display = 'block';
    if (dots.length > 0) {
      dots[this.slideshowService.slideIndex - 1].className += ' active';
    }
  }
}