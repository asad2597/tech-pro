import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Footer } from '../footer/footer';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [RouterOutlet,CommonModule, RouterModule],
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
    services: string[] = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'IT Consulting'
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
