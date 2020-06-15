import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/api/data.service';
import { environment } from 'src/environments/environment';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  baseUrl: string = `${environment.baseUrl}/transitions`;
  constructor(private dateService: DataService) { }
  dataSource : any;
  displayedColumns: string[] = ['accountName', 'accountNumber', 'bank','amount','transitionType','date'];
    ngOnInit(): void {
    let email:string = sessionStorage.getItem('email')
    this.dateService.getDataByUser(this.baseUrl,email).subscribe(data => {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data;
        console.log(data);
       
    })
  }

}
