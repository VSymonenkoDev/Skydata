import {Component, OnInit} from '@angular/core';
import {MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Sky Data';
  data = {};

  constructor (private mainService: MainService) {}

  ngOnInit() {
    this.mainService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
      return this.data;
    });
  }

  searchWeather() {

  }
}
