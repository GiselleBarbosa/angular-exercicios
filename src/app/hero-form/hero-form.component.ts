import { Component } from '@angular/core';

import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {

  title: string = 'Formulario de Personagens';

  powers = ['Selecione um poder', 'Rico', 'Raio Laser',
    'Super forca', 'Velocidade', 'Voar', 'Resistente'];

  model = new Hero(1,'','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(2,'','','');
  }
}