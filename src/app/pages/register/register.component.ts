import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../service/register.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientsService: RegisterService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      telephone: ['', Validators.required],
      document: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  ngOnInit(): void {  }

  onSubmit() {
    
    console.log(this.registerForm)
    if (this.registerForm.valid) {
      console.log('formulario ', this.registerForm.value);
      this.clientsService.creatRegister(this.registerForm.value)
        .subscribe(
          (client) => {
            this.router.navigate(['/balance'])
            // localStorage.setItem('id', client._id);
            console.log('client ', client)
          },
          (error) => {
            alert('No se pudo completar el registro.');
            console.error('Error creating client: ', error);
          }
        );
    } else {
      // document.getElementById('register-form').classList.add('was-validated');
      alert('Debes completar todos los campos');
    }

  }

}


