import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';
import { ListadoService } from './listado.service';
import {Pipe, PipeTransform} from '@angular/core';
import {DetalleUserService} from './detalle-user/detalle-user.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  usuarios:Usuario[];
  usuario_name:string;
  ususario_username:string;
  usuario_email:string;
  usuario_phone:string;
  usuarioSeleccionado:Usuario;

  constructor(private listadoService:ListadoService, private detalleUser :DetalleUserService) { 

    this.usuario_name = "";
    this.ususario_username = "";
    this.usuario_email = "";
    this.usuario_phone = "";
  }

  ngOnInit() {

    this.listadoService.getUsers().subscribe(response => {
      this.usuarios = response;
    });

  }

  abrirModal(usuario : Usuario){
    this.usuarioSeleccionado = usuario;
    this.detalleUser.abrirModal();
  }

}
