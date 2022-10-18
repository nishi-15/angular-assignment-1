export interface Employee {
  firstName: string,
  lastName: string,
  email: string,
  contactNumber: number,
  address: string,
  userName: string,
  password: string,
  gender: string,
  qualifications: Array<Qualifications>,
  experience: Array<Experiences>,
  coadingLanguages: Array<CoadingLanguages>
}

export interface Qualifications {
  name: string
}

export interface Experiences {
  name: string
}

export interface CoadingLanguages {
  id:string,
  language:string,
  checked:boolean
}

