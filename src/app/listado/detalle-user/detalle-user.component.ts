import { Component, OnInit, Input } from '@angular/core';
import {DetalleUserService} from './detalle-user.service';
import { Usuario } from '../usuario';
 
@Component({
  selector: 'app-detalle-user',
  templateUrl: './detalle-user.component.html',
  styleUrls: ['./detalle-user.component.css']
})
export class DetalleUserComponent implements OnInit {

  @Input() usuario: Usuario;
  phone:number;
  email:string;

  constructor(private detalleUser:DetalleUserService) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.detalleUser.cerrarModal();
  }

  update():void{
    this.detalleUser.update(this.usuario).subscribe(response => {
      this.cerrarModal();
    });
  }

}
