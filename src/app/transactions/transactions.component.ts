import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor() { }
  accounts =[
    {
      'accountName': "Test",
      'accountNumber': 123456,
      'bank': "AMP",
      "amount": 200,
      "date": "22/02/2020"
    },{
      'accountName': "Test",
      'accountNumber': 123456,
      'bank': "AMP",
      "amount": 200,
      "date": "22/02/2020"
    }
  ]
  displayedColumns: string[] = ['accountName', 'accountNumber', 'bank','amount','date'];
  dataSource = this.accounts;
  ngOnInit(): void {
  }

}
