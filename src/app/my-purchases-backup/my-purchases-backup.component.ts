import { Component, OnInit } from '@angular/core';
import { MovieAppDataService } from '../services/movie-app-data.service';

@Component({
  selector: 'app-my-purchases-backup',
  templateUrl: './my-purchases-backup.component.html',
  styleUrls: ['./my-purchases-backup.component.scss']
})
export class MyPurchasesBackupComponent implements OnInit {
  public movieAppDataMyPurchases: any = null;

  constructor(
    private movieAppDataService: MovieAppDataService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.movieAppDataService.getMyPurchases().subscribe(data => this.movieAppDataMyPurchases = data);
  }
}
