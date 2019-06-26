import { Component } from "@angular/core"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent{
  num1: number = 1;
  num2: number = 2;

  isHappy: Boolean = true;
  name: string = 'Sagir';
  title= "Hello World"
  logo: string = "assets/img/logo.png";


  handleBlur(event: any){
   // this.name = event.target.value;
    console.log(event);
  }

  handleInput(event: any){
    this.name = event.target.value;
  }

  handleClick(){
    console.log("I am here");
    this.name = "Sagiruddin Mondal";
  }
}