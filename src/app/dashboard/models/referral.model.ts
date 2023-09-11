export interface Referral {
    id: number;
    userId: number; //იუზერი რომელმაც მოიწვია
    referredUserId: number; //იუზერი ვინც მოიწვიეს
    referralDate: Date;
    referralReward: number; //რამდენი მიიღო მოწვევისას
    referralsCount: number; //სულ რამდენი მოიწვია
  }
  