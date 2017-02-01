import { Component, OnInit } from '@angular/core';
import { MotesService } from '../motes.service';

@Component({
  selector: 'app-motes',
  templateUrl: './motes.component.html',
  styleUrls: ['./motes.component.css']
})
export class MotesComponent implements OnInit {

  motes: any = [];
  private chartData: Array<any>;

  constructor(private motesService: MotesService) { }

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);

    // Retrieve posts from the API
    this.motesService.getAllMotes().subscribe(motes => {
      this.motes = motes;
    });
  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (10 + Math.floor(Math.random() * 100)); i++) {
      this.chartData.push([
        `Param[${i}]`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }
}