import { Component } from '@angular/core';

interface HeroDetail {
  name: string;
  id: number | string;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroDetail: HeroDetail = { name: '', id: '' };
  heroes: any[] = [
    { id: 1, name: 'Wade' },
    { id: 2, name: 'Drex' },
    { id: 3, name: 'John' },
    { id: 1, name: 'Reid' },
  ];
  getHeroDetail(hero: any): void {
    console.log('HERO DETAIL', hero);
    this.heroDetail.name = hero.name;
    this.heroDetail.id = hero.id;
  }
}
