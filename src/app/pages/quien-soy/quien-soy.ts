import { Component, NgZone, OnInit, ChangeDetectorRef } from '@angular/core';
import { Github, GitHubUser} from '../../services/github';
import { Nav } from "../../components/nav/nav";


@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [Nav],
  templateUrl: './quien-soy.html',
  styleUrl: './quien-soy.css'
})
export class QuienSoy implements OnInit {
  username: string = 'StefaniaAyelen';
  loading = true;
  errorMsg = '';
  user: GitHubUser | null = null;

  constructor(private github: Github, private change: ChangeDetectorRef){}

  ngOnInit(): void {
    this.cargarDatos();
  }


  cargarDatos(){
    this.github.getUser(this.username).subscribe({
      next: data => {
        this.loading = false;
        this.user = data;
        this.change.detectChanges(); //Refresca la pagina para detectar cambios de variables.
      },
      error: () => {
        this.errorMsg = 'Error al traer los datos';
        this.loading = false
        this.change.detectChanges();
      }
    }
    )
  }
}
