import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/api/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.component.html',
  styleUrls: ['./beneficiary.component.css']
})
export class BeneficiaryComponent implements OnInit {

  constructor(private dataService: DataService,private fb:FormBuilder,private router:Router) { }
  beneficiaryForm:FormGroup;
  addBene: string = `${environment.baseUrl}/beneficiaryaccounts`;
  beneficiaryaccounts:any;
  ngOnInit(): void {
    this.beneficiaryForm = this.fb.group({
      "accountName": ['',Validators.required],
      "accountNumber": ['',Validators.required],
      "bank": ['',Validators.required],
      "email": ['',Validators.required]
    })
  }
  /**
   * @description this method called to add other account details
   */
  addBenefis() {
      let accountName:string = this.beneficiaryForm.get('accountName').value;
    let accountNumber:number = this.beneficiaryForm.get('accountNumber').value;
    let bank :any = this.beneficiaryForm.get('bank').value;
   if(accountName && accountNumber && bank) {
    let benifisObj:any = {
      accountName,
      accountNumber,
      bank,
      availableBalance: 10000,
      email : sessionStorage.getItem('email'),
    }
    
    console.log(benifisObj);
    this.dataService.addData(this.addBene,benifisObj).subscribe(data => {
      console.log(data);
      alert("Benificiary added successfully")
      this.router.navigate(['fundtranfer'])
    });
  }
  }

}
