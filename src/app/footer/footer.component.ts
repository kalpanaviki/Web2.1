import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @ViewChild('iframeContainer') iframeContainer!: ElementRef;
  @ViewChild('iframe') iframe!: ElementRef;

  openIframe() {
    this.renderer.setStyle(this.iframeContainer.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.iframe.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.iframe.nativeElement, 'height', '100%');
    this.iframe.nativeElement.src = 'http://unibioindia.in/enqyForm.asp';
  }

  closeIframe() {
    this.renderer.setStyle(this.iframeContainer.nativeElement, 'display', 'none');
    this.iframe.nativeElement.src = '';
  }

  constructor(private router: Router, private renderer: Renderer2) {}
  navigateAndCloseMenu(route: string) {
    const toggleButton = document.querySelector('.navbar-toggler') as HTMLElement;
    if (toggleButton) {
      toggleButton.dispatchEvent(new Event('click'));
    }
    this.router.navigate([route]);
  }
}
