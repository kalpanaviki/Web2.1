import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Properties } from '../appConstants/aboutConstants';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  array1: any = [];
  array2: any = [];
  array3: any = [];
  array4: any = [];

  isLaptop = false;
  isMobile = false;


  constructor() {}


  init() {
    this.array1 = Properties.ABOUT_FIRST_ARRAY;
    this.array2 = Properties.ABOUT_SECOND_ARRAY;
    this.array3 = Properties.ABOUT_THIRD_ARRAY;
    this.array4 = Properties.ABOUT_FOURTH_ARRAY;
  }

  ngOnInit() {
    this.init();
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    const breakpoint = 480; 

    this.isLaptop = screenWidth > breakpoint;
    this.isMobile = screenWidth <= breakpoint;
  }

}
