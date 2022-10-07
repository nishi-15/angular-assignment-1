import { Component, OnInit } from '@angular/core';
import { Employee, CoadingLanguages } from '../data/employee';
import { FormControl, FormGroup, NgModel } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: 0,
    address: '',
    userName: '',
    password: '',
    gender: '',
    qualifications: [],
    experience: [],
    coadingLanguages: []
  }
  constructor() { }

  qualifications: any;
  experience: any;
  coadingLanguages: any;

  //Initialized Qualification, Experience and Coading Languages using ngOnInit().
  ngOnInit(): void {
    this.qualifications = [
      { name: 'B.A' },
      { name: 'B.C.A' },
      { name: 'B.Com' },
      { name: 'B.B.A' },
      { name: 'M.A' },
      { name: 'M.C.A' },
      { name: 'M.Com' },
      { name: 'M.B.A' }];

    this.experience = [
      { name: '6 months' },
      { name: '1 year' },
      { name: '2 years' },
      { name: '3 years' },
      { name: '5 years' }
    ];

    this.coadingLanguages = [
      { "id": "1", "language": "C/C++", "checked": false },
      { "id": "2", "language": "Java", "checked": false },
      { "id": "3", "language": "C#", "checked": false },
      { "id": "4", "language": "PHP", "checked": false },
      { "id": "5", "language": "Python", "checked": false }
    ]
  }

  onBlur(field: NgModel) {
    console.log('In onBlur method:', field.valid);
  }

  onSubmit() {
    console.log('In onSubmit method:', this.employeeDetails);
  }

  //Created form controls for all the fields
  formGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    contactNumber: new FormControl(),
    address: new FormControl(),
    userName: new FormControl(),
    password: new FormControl(),
    gender: new FormControl(),
    qualifications: new FormControl(),
    experience: new FormControl()
  })

  //Added code for pushing multiple coading languages in the array
  flagD = false;
  setLanguages(data: CoadingLanguages) {
    this.flagD = false;
    data.checked = !data.checked;
    if (!this.employeeDetails.coadingLanguages || this.employeeDetails.coadingLanguages?.length == 0) {
      this.employeeDetails.coadingLanguages = new Array<any>();
    }
    if (this.employeeDetails.coadingLanguages.length == 0) {
      this.employeeDetails.coadingLanguages.push(data);
    } else if (this.employeeDetails.coadingLanguages.length > 0) {

      this.employeeDetails.coadingLanguages = this.employeeDetails.coadingLanguages.filter(res => {
        if (res.id != data.id) {
          return res;
        } else {
          this.flagD = true;
          return;
        }
      });

      if (this.flagD == false) {
        this.employeeDetails.coadingLanguages.push(data);
      }
    }
  }
}
