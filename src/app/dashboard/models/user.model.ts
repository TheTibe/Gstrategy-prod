export class User {
    id: number;
    username: string;
    password!: string;
    phone!: number;
    balance: number;
    referrals: Referral[];
    name!: string;
    surname!: string;


    
    constructor(id: number, username: string, balance: number, referrals: Referral[]) {
      this.id = id;
      this.username = username;
      this.balance = balance;
      this.referrals = referrals;
    }
  }
  
  export class Referral {
    id: number;
    username: string;
  
    constructor(id: number, username: string) {
      this.id = id;
      this.username = username;
    }
  }
  