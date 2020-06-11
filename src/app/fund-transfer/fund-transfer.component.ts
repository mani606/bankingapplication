import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/api/data.service';
import { environment } from 'src/environments/environment';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  baseUrl: string = `${environment.baseUrl}/beneficiaryaccounts`;
  userUrl: string = `${environment.baseUrl}/users`;
  fundUrl: string = `${environment.baseUrl}/transitions`;
  sendMoneyFlag: Boolean = false;
  facAccounts;
  email = sessionStorage.getItem('email')
  constructor(private dataService: DataService,private fb: FormBuilder) { }
  accounts;
  displayedColumns: string[] = ['accountName', 'accountNumber', 'bank','accountId'];
  MyDataSource: any;
  fundForm;
  currentRow;
  ngOnInit(): void {
    this.fundForm = this.fb.group({
      "sendAmount" : [null]
    })
    this.dataService.getDataByUser(this.baseUrl,this.email).subscribe(data => {
      this.MyDataSource = new MatTableDataSource();
      this.MyDataSource.data = data;
      this.facAccounts = data;
    })
  }
  showSendMoney(i) {
    this.currentRow = i;
    this.sendMoneyFlag = true;
  }
  hideSendMoney(){
    this.sendMoneyFlag = false;
  }
  sendMoney(e) {
   
    let account = this.facAccounts.filter(element => element.accountId == e)[0]
    let addingAmount = this.fundForm.get('sendAmount').value;
    if(addingAmount != null) {
    this.dataService.getDataByUser(this.userUrl,this.email).subscribe(data => {
      let availableBalance = data[0].account[0].availableBalance;
      let updatedObj = data[0].account[0].availableBalance - addingAmount;
      let userId = data[0].id
      var currentdate = new Date(); 
      var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
      let transferObj = {
        "accountName": account.accountName,
        "accountNumber": account.accountNumber,
        "bank": account.bank,
        "email": account.email,
        "amount": addingAmount,
        "transitionType": "Debited",
        "date": datetime
      }
      console.log("dfds",transferObj)
        if(addingAmount > availableBalance - 500) {
          alert("You Does't Have Sufficient Funds");
        } else {
          this.dataService.addData(this.fundUrl,transferObj).subscribe(data => {
            this.dataService.updateData(this.userUrl+"/"+userId,updatedObj).subscribe(data => {
              console.log("UPdated success")
            })
            console.log("Added success fulley",data);
            this.sendMoneyFlag = false;
          })
         
        }
   
      console.log(addingAmount)
    })
  }
  }
}
