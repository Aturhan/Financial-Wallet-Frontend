export class Register {
  name: string
  email:string
  password:string
  amount:number

  constructor(){
    this.name =""
    this.email =""
    this.password =""

  }

}

export interface IAccount{
  amonunt:number
  spendList: any[]
  user: any
}

export interface Currency{
  code:string
  currencyDescription:string
  buyingPrice:string
  sellingPrice:string
}


export class AuthRequest{
  email:string
  password:string
  constructor(){
    this.email =""
    this.password =""
  }
}

export interface AuthResponse{
  message:string
  result:boolean
  userDto:UserDto
  token:string
}



export class UserDto {
  name:string
  email:string
  constructor(){
    this.name = ""
    this.email = ""
  }
}

export interface ApiResponse{
  message:string
  result:boolean
}

export interface ILoggedUser{
  name:string
  email:string
}

export interface ISpendListResponse {
  result:boolean
  data: SpendDto[]
}

export class CreateSpendingReq {
  accountId:string
  title:string
  spendType:string
  amount:number
  constructor(){
    this.accountId = ""
    this.title = ""
    this.spendType = ""
    this.amount = 0
  }
}

export interface CreateSpendRes{
  result:boolean
  message:string
  spendDto:SpendDto
}


export class SpendDto {
  id:string
  title:string
  accountId:string
  amount:number
  spendType:string

}
