import { Component } from '@angular/core';
import { Referral, User } from '../models/user.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users: User[] = [];

  ngOnInit(): void {
    for (let i = 1; i <= 1; i++) {
      const referrals: Referral[] = [];
      for (let j = 1; j <= 3; j++) {
        referrals.push(new Referral(j, `Referral ${j}`));
      }
      this.users.push(new User(i, `User ${i}`, 1, referrals));
    }
  }
}
