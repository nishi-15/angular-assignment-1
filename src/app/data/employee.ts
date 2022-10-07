import { ArrayType } from "@angular/compiler";

export interface Employee {
  firstName: string,
  lastName: string,
  email: string,
  contactNumber: number,
  address: string,
  userName: string,
  password: string,
  gender: string,
  qualifications: string[],
  experience: string[],
  coadingLanguages: Array<CoadingLanguages>
}
export interface CoadingLanguages{
  id:string,
  language:string,
  checked:boolean;

}

