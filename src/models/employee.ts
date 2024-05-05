export class Employee {
  id: string
  firstName: string
  lastName: string
  email: string
  address: string

  constructor(obj?: any) {
    this.id = obj ? obj.id : ''
    this.firstName = obj ? obj.firstName : ''
    this.lastName = obj ? obj.lastName : ''
    this.email = obj ? obj.email : ''
    this.address = obj ? obj.address : ''
  }
}
