import { Component, Input } from '@angular/core';
import { User } from '../models/user.model'; // Import the User class

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.css']
})
export class ReferralsComponent {
  @Input() user!: User; // Input to receive user data from the parent component

}
