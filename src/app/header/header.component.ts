import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/api/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userUrl: string = `${environment.baseUrl}/users`;
  email:string= sessionStorage.getItem('email');
  accountDetails:any;
  constructor(private route: Router,private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDataByUser(this.userUrl,this.email).subscribe(data => {
      this.accountDetails = data[0];
      console.log(this.accountDetails);
   })
  }
  logout() {
    this.route.navigate([''])
  }
}
