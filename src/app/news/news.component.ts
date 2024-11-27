import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  slides = [
    {
      slideId: '',
      imageSrc: '../assets/images/Asia_Pacific_May_june_24.jpeg',
      link: '../assets/images/Aqua Culture Asia Pacific AQ24198 AAP May_Jun 24_FA_New 23524 (1).pdf',
      isYouTube: false,
      caption: 'Asia Pacific May/June 2024 Report'
    },
    {
      slideId: '',
      imageSrc: '',
      link: 'https://youtu.be/Je4jFa5ZC-0',
      isYouTube: true,
      caption: 'A Tour of the Unibio Hatchery ft. TCRS'
    },
    {
      slideId: '',
      imageSrc: '../assets/images/Spotlight.jpeg',
      link: 'https://www.globalseafood.org/blog/bap-spotlight-unibio-india-hatcheries/',
      isYouTube: false,
      caption: 'BAP Spotlight Story ft. Unibio (India) Hatcheries Private Limited'
    },
    {
      slideId: '',
      imageSrc: '',
      link: 'https://youtu.be/U2O_swbs_r4',
      isYouTube: true,
      caption: 'Aqualma / Unibio Black Tiger Shrimp Broodstock and Post larvae ft. Ramraj Dhamodar'
    },
 
  ];

  slideIndex = 1;
  isLaptop = false;
  isMobile = false;

  constructor(private sanitizer: DomSanitizer) { }

  openLink(url: string) {
    window.open(url, '_blank');
  }

  ngOnInit(): void {
    console.log('NewsComponent loaded');
    this.checkScreenSize();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showSlides(this.slideIndex);
    });
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    const screenWidth = window.innerWidth;
    const breakpoint = 468;

    this.isLaptop = screenWidth > breakpoint;
    this.isMobile = screenWidth <= breakpoint;

    console.log('isLaptop:', this.isLaptop);
    console.log('isMobile:', this.isMobile);
  }

  shareSlide(slideId: string, caption: string): void {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out this slide!',
          text: caption,
          url: window.location.origin + slideId,
        })
        .then(() => console.log('Slide shared successfully'))
        .catch((error) => console.error('Error sharing slide:', error.message));
    } else {
      console.log('Web Share API not supported.');
    }
  }

  getYouTubeEmbedUrl(url: string): SafeResourceUrl {
    const videoId = this.extractYouTubeVideoId(url);
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  extractYouTubeVideoId(url: string): string {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|v=|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : '';
  }
}