import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/api/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-acoount-summary',
  templateUrl: './acoount-summary.component.html',
  styleUrls: ['./acoount-summary.component.css']
})
export class AcoountSummaryComponent implements OnInit {
  userUrl: string = `${environment.baseUrl}/users`;
  email:string = sessionStorage.getItem('email');
  //accountDetails;
  accountDetails:any;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDataByUser(this.userUrl,this.email).subscribe(data => {
       this.accountDetails = data[0].account[0];
       console.log(this.accountDetails);
    })
  }

}
