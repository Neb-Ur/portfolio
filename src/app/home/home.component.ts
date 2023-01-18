import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private service: UsuariosService) {}

  ngOnInit(): void {}

  getUser() {
    console.log('test');
    var res = this.service.getusuario().subscribe(
      (response) => {
        console.log('ok', response);
      },
      (error) => {
        console.log('error', error);
      }
    );
    console.log(res);
  }
}
