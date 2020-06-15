import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/api/data.service';
import { environment } from 'src/environments/environment';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
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
  facAccounts:any;
  email:string = sessionStorage.getItem('email')
  constructor(private dataService: DataService,private fb: FormBuilder,private router:Router) { }
  accounts:any;
  displayedColumns: string[] = ['accountName', 'accountNumber', 'bank','id'];
  MyDataSource: any;
  fundForm:FormGroup;
  currentRow:any;
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
  /**
   * @description this method called send money to account details
   * @param e 
   */
  sendMoney(id:number) {
       let account = this.facAccounts.filter(element => element.id == id)[0]
    let addingAmount = this.fundForm.get('sendAmount').value;
    if(addingAmount != null) {
    this.dataService.getDataByUser(this.userUrl,this.email).subscribe(data => {
      let availableBalance = data[0].account[0].availableBalance;
      data[0].account[0].availableBalance = data[0].account[0].availableBalance - addingAmount;
      let userId :number= data[0].id;
      let userDetails:any = data[0];
      var currentdate = new Date(); 
      var datetime =  currentdate.getDate() + "-"+ (currentdate.getMonth()+1)  + "-"  + currentdate.getFullYear() + "  " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":"  + currentdate.getSeconds();
      let transferObj = {
        "accountName": account.accountName,
        "accountNumber": account.accountNumber,
        "bank": account.bank,
        "email": account.email,
        "amount": addingAmount,
        "transitionType": "Credited",
        "date": datetime
      }
      console.log("dfds",transferObj)
        if(addingAmount > availableBalance - 500) {
          alert("You Does't Have Sufficient Funds");
        } else {
          this.dataService.addData(this.fundUrl,transferObj).subscribe(data => {
            console.log("update Account",userDetails);
            alert("Fund Transferred Successfully")
            this.dataService.updateData(this.userUrl+"/"+userId,userDetails).subscribe(data => {
              console.log("UPdated success")
            });
            let currentAccount = this.facAccounts.filter(element => element.id == id);
            currentAccount[0].availableBalance  = parseInt(currentAccount[0].availableBalance) +  parseInt( addingAmount);
            console.log("current account",currentAccount);
           this.dataService.updateData(this.baseUrl+"/"+id,currentAccount[0]).subscribe(data => {
              console.log("UPdated success")
            });  
            console.log("Added successfully",data);
           // alert ("send money");
            this.sendMoneyFlag = false;
            this.router.navigate(['/summary']);
          })
         
        }
   
      console.log(addingAmount)
    })
  }
  }
}
