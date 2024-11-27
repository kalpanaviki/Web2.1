import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flipbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flipbook.component.html',
  styleUrls: ['./flipbook.component.scss']
})
export class FlipbookComponent {
  currentLocation = 1;
  numOfPapers = 3;
  maxLocation = this.numOfPapers + 1;
  bookTransform = 'translateX(0%)';
  prevBtnTransform = 'translateX(0px)';
  nextBtnTransform = 'translateX(0px)';

  paperStates = [
    { flipped: false, zIndex: 3 },
    { flipped: false, zIndex: 2 },
    { flipped: false, zIndex: 1 }
  ];

  openBook(): void {
    this.bookTransform = 'translateX(50%)';
    this.prevBtnTransform = 'translateX(-180px)';
    this.nextBtnTransform = 'translateX(180px)';
  }

  closeBook(isAtBeginning: boolean): void {
    this.bookTransform = isAtBeginning ? 'translateX(0%)' : 'translateX(100%)';
    this.prevBtnTransform = 'translateX(0px)';
    this.nextBtnTransform = 'translateX(0px)';
  }

  goNextPage(): void {
    if (this.currentLocation < this.maxLocation) {
      switch (this.currentLocation) {
        case 1:
          this.openBook();
          this.flipPaper(0, true, 1);
          break;
        case 2:
          this.flipPaper(1, true, 2);
          break;
        case 3:
          this.flipPaper(2, true, 3);
          this.closeBook(false);
          break;
        default:
          throw new Error("Unknown state");
      }
      this.currentLocation++;
    }
  }

  goPrevPage(): void {
    if (this.currentLocation > 1) {
      this.currentLocation--;
      switch (this.currentLocation) {
        case 1:
          this.closeBook(true);
          this.flipPaper(0, false, 3);
          break;
        case 2:
          this.flipPaper(1, false, 2);
          break;
        case 3:
          this.openBook();
          this.flipPaper(2, false, 1);
          break;
        default:
          throw new Error("Unknown state");
      }
    }
  }

  flipPaper(paperIndex: number, isFlipped: boolean, zIndex: number): void {
    this.paperStates[paperIndex].flipped = isFlipped;
    this.paperStates[paperIndex].zIndex = zIndex;
  }
}
