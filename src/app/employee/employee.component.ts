import { Component, OnInit } from '@angular/core';
import { Employee, CoadingLanguages, Qualifications, Experiences } from '../data/employee';
import { FormBuilder, FormControl, FormGroup, NgModel, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeDetails: Employee = { firstName: '', lastName: '', email: '', contactNumber: 0, address: '', userName: '', password: '', gender: '', qualifications: [], experience: [], coadingLanguages: [] }
  qualifications: Qualifications[] | undefined;
  experience: Experiences[] | undefined;
  coadingLanguages: CoadingLanguages[] | undefined;
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
    /** This will create formControlGroup for elements and assign validators */
    this.form = fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contactNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      address: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      qualifications: ['', [Validators.required]],
      experience: ['', [Validators.required]]
    })
  }

  /** It will Initialize Qualification, Experience and Coading Languages using ngOnInit(). */
  ngOnInit(): void {
    this.qualifications = [{ "name": 'B.A' }, { "name": 'B.C.A' }, { "name": 'B.Com' }, { "name": 'B.B.A' }, { "name": 'M.A' }, { "name": 'M.C.A' }, { "name": 'M.Com' }, { "name": 'M.B.A' }];
    this.experience = [{ name: '6 months' }, { name: '1 year' }, { name: '2 years' }, { name: '3 years' }, { name: '5 years' }];
    this.coadingLanguages = [
      { "id": "1", "language": "C/C++", "checked": false },
      { "id": "2", "language": "Java", "checked": false },
      { "id": "3", "language": "C#", "checked": false },
      { "id": "4", "language": "PHP", "checked": false },
      { "id": "5", "language": "Python", "checked": false }
    ]
  }

  /** It will print formatted Employee Details in console */
  onSubmit() {
    console.log("Employee Details");
    console.log("------------------------------------");
    console.log(`Employee Name: ${this.employeeDetails.firstName} ${this.employeeDetails.lastName}`);
    console.log(`Email: ${this.employeeDetails.email}`);
    console.log(`Contact Number: ${this.employeeDetails.contactNumber}`);
    console.log(`Address: ${this.employeeDetails.address}`);
    console.log(`Username: ${this.employeeDetails.userName}`);
    console.log(`Password: ${this.employeeDetails.password}`);
    console.log(`Gender: ${this.employeeDetails.gender}`);
    console.log(`Qualification: ${this.employeeDetails.qualifications.toString()}`);
    console.log(`Experience: ${this.employeeDetails.experience.toString()}`);
    console.log(`Coading Languages:`);
    this.employeeDetails.coadingLanguages.forEach(languageDetail => {
      console.log(`${languageDetail.language}`);
    });
  }

  get formData(){
    return this.form.controls;
  }

  /** setLanguages() will push multiple coading languages in the array
   * @param coadingLanguages of type CoadingLanguages to push into array if data is not available in array
   */
  public setLanguages(coadingLanguages: CoadingLanguages): void {
    let isChecked: boolean = false;
    coadingLanguages.checked = !coadingLanguages.checked;
    if (!this.employeeDetails.coadingLanguages || this.employeeDetails.coadingLanguages.length == 0) {
      this.employeeDetails.coadingLanguages = new Array<CoadingLanguages>();
      this.employeeDetails.coadingLanguages.push(coadingLanguages);
    } else if (this.employeeDetails.coadingLanguages.length > 0) {
      this.employeeDetails.coadingLanguages = this.employeeDetails.coadingLanguages.filter(language => {
        if (language.id != coadingLanguages.id)
          return language;
        else {
          isChecked = true;
          return;
        }
      });
      if (isChecked === false)
        this.employeeDetails.coadingLanguages.push(coadingLanguages);
    }
  }
}
