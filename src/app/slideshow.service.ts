import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {
  slideIndex = 1;
  slides = [
    { image: 'assets/images/SS1.jpeg', caption: 'Caption One' },
    { image: 'assets/images/SS7.jpeg', caption: 'Caption Two' },
    { image: 'assets/images/SS3.jpeg', caption: 'Caption Three' },
    { image: 'assets/images/SS4.jpeg', caption: 'Caption Four' },
    { image: 'assets/images/SS5.jpeg', caption: 'Caption Five' }
  ];

  constructor() {}

  getCurrentSlideIndex() {
    return this.slideIndex;
  }

  setCurrentSlideIndex(index: number) {
    this.slideIndex = index;
  }

  getSlides() {
    return this.slides;
  }
}