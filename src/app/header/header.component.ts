import { Component, HostListener, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('iframeContainer') iframeContainer!: ElementRef;
  @ViewChild('iframe') iframe!: ElementRef;

  constructor(private router: Router, private renderer: Renderer2) {}

  navigateAndCloseMenu(route: string) {
    const toggleButton = document.querySelector('.navbar-toggler') as HTMLElement;
    if (toggleButton) {
      toggleButton.dispatchEvent(new Event('click'));
    }
    this.router.navigate([route]);
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      const toggleButton = document.querySelector('.navbar-toggler');
      if (toggleButton) {
        toggleButton.dispatchEvent(new Event('click'));
      }
    }
  }

  openNav(): void {
    document.getElementById("mySidenav")!.style.width = "250px";
    document.getElementById("main")!.style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  closeNav(): void {
    document.getElementById("mySidenav")!.style.width = "0";
    document.getElementById("main")!.style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  openIframe() {
    this.renderer.setStyle(this.iframeContainer.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.iframe.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.iframe.nativeElement, 'height', '100%');
    this.iframe.nativeElement.src = 'https://unibioindia.in/enqyForm.asp';
  }

  closeIframe() {
    this.renderer.setStyle(this.iframeContainer.nativeElement, 'display', 'none');
    this.iframe.nativeElement.src = '';
  }

  ngOnInit(): void { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    const logo = document.getElementById('logo')?.getElementsByTagName('img')[0]; // Get the image inside the logo
    const links = document.querySelectorAll('#navbar a'); // Get all nav links

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      if (navbar) navbar.style.padding = '5px 10px';
      if (logo) {
        logo.style.height = '50px'; // Height after scroll
        logo.style.width = '115px'; // Width after scroll
      }
      links.forEach(link => {
        (link as HTMLElement).style.fontSize = '22px'; // Font size after scroll
      });
    } else {
      if (navbar) navbar.style.padding = '20px 10px';
      if (logo) {
        logo.style.height = '80px'; // Initial height
        logo.style.width = '184px'; // Initial width
      }
      links.forEach(link => {
        (link as HTMLElement).style.fontSize = '25px'; // Initial font size
      });
    }
  }
}


