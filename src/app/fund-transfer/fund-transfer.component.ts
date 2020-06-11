import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  sendMoneyFlag: Boolean = false;
  constructor() { }
  accounts =[
    {
      'accountName': "Test",
      'accountNumber': 123456,
      'bank': "AMP"
    },{
      'accountName': "Test",
      'accountNumber': 123456,
      'bank': "AMP"
    }
  ]
  displayedColumns: string[] = ['accountName', 'accountNumber', 'bank','accoundId'];
  dataSource = this.accounts;
  ngOnInit(): void {
  }
  showSendMoney() {
    this.sendMoneyFlag = true;
  }
  hideSendMoney(){
    this.sendMoneyFlag = false;
  }
}
