import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gym-features',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gym-features.component.html',
  styleUrls: ['./gym-features.component.scss']
})
export class GymFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}