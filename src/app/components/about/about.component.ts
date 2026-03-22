import { Component, OnInit } from '@angular/core';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{

  constructor(private _aboutService: AboutService){}

  ngOnInit(): void {
    this._aboutService.getAbout();
  }

  public get aboutService(): AboutService {
    return this._aboutService;
  }
  public set aboutService(value: AboutService) {
    this._aboutService = value;
  }

}
