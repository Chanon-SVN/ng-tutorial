import { Component } from '@angular/core';
import { RestHandlerService } from './../../services/resthandler.service'

@Component({
  selector: 'login',
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers:[RestHandlerService]
})
export class LoginComponent {
  public username:string;
  public password:string;
  public name:string;
  public checkInDate:string;
  public nationalID:string;
 
  constructor(private resthandler:RestHandlerService){
    this.name ='';
    this.resthandler.getData('/helloworld')
    .subscribe(res => {
      console.log(res);
      this.name = res[0].name;
    })
   this.username='';
   this.password='';
  }

  login() {
    let data = {
      username:this.username,
      password:this.password
    }
    console.log(data);

    this.resthandler.postData(data, '/login')
    .subscribe(res => {
      console.log(res);
    })
  }
  
}
