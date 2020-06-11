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
  beneficiaryForm;
  addBene: string = `${environment.baseUrl}/beneficiaryaccounts`;
  beneficiaryaccounts
  ngOnInit(): void {
    this.beneficiaryForm = this.fb.group({
      "accountName": ['',Validators.required],
      "accountNumber": ['',Validators.required],
      "bank": ['',Validators.required],
      "email": ['',Validators.required]
    })
  }
  addBenefis() {
    let benifisObj = {
      accountName: this.beneficiaryForm.get('accountName').value,
      accountNumber: this.beneficiaryForm.get('accountNumber').value,
      bank: this.beneficiaryForm.get('bank').value,
      email : sessionStorage.getItem('email'),
    }
    console.log(benifisObj);
    this.dataService.addData(this.addBene,benifisObj).subscribe(data => {
      console.log(data);
      this.router.navigate(['fundtranfer'])
    });
  }

}
