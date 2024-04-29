import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrl: './placement.component.css'
})
export class PlacementComponent {
  companies = [
    { 
      name: 'Zoho', 
      location: 'Chennai', 
      vacancies: 5, 
      imageUrl: 'assets/zoho.jpg' 
    },
    { 
      name: 'Accenture', 
      location: 'Delhi', 
      vacancies: 3, 
      imageUrl: 'assets/accenture.png' 
    },
    { 
      name: 'HDFC Bank', 
      location: 'Coimbatore', 
      vacancies: 4, 
      imageUrl: 'assets/hdfc.jpg' 
    },
    { 
      name: 'Entrust', 
      location: 'Bangalore', 
      vacancies: 2, 
      imageUrl: 'assets/entrust.png' 
    }
  ];

  constructor(private router: Router) {}

  enroll(company: any) {
    // Navigate to the enrollment page, passing any necessary data
    this.router.navigate(['/enroll', company.id]);
  }

}
