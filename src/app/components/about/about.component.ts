import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  imageVisible = false;
  nameVisible = false;

  ngAfterViewInit(): void {
    // Kép animáció rögtön betöltéskor
    setTimeout(() => {
      this.imageVisible = true;
    }, 100); // kis delay, hogy a betöltés után induljon

    // Név animáció, rövid késéssel
    setTimeout(() => {
      this.nameVisible = true;
    }, 800); // 0.8s késés
  }

}
