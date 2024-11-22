import { Component } from '@angular/core';
import { materialModule } from '../../model.module';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [materialModule, RouterModule, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor (public router:Router) {}


  Checklogin(){
 this.router.navigateByUrl('/aside/dashboard');
  }

}
