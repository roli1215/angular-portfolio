import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { AboutComponent } from "./components/about/about.component";
import { ResultsComponent } from "./components/results/results.component";
import { BlogComponent } from './components/blog/blog.component';
import { SponsorsComponent } from "./components/sponsors/sponsors.component";
import { ContactComponent } from "./components/contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, AboutComponent, ResultsComponent, BlogComponent, SponsorsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  activeSection = 'about';

  @HostListener('window:scroll', [])
  onScroll() {

    const sections = ['about', 'blog', 'results', 'sponsors', 'contact'];

    for (let section of sections) {

      const element = document.getElementById(section);

      if (element) {
        const rect = element.getBoundingClientRect();

        if (rect.top <= 200 && rect.bottom >= 200) {
          this.activeSection = section;
        }
      }
    }

  }
}
