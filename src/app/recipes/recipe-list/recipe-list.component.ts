import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('pastel de choclo', 'choclo molido con leche', 'https://cdn-0.enmicocinahoy.cl/wp-content/uploads/2011/02/pastel-choclo-7.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
