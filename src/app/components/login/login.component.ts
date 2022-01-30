import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credentials } from 'src/app/models/credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(4));

  constructor(private toast: ToastrService,
              private service: AuthService) { }

  ngOnInit(): void {
  }

  Logar(){
    this.service.authenticate(this.cred).subscribe(resposta => {
      this.toast.info(resposta.headers.get('Authorization'))

    })

  }

  validaCampos():boolean {
    return this.email.valid && this.password.valid;
  }
}
