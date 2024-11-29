import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  breakfast: Recipe[] = [];
  lunch: Recipe[] = [];
  dinner: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.breakfast = this.recipeService.getBreakfast();
    this.lunch = this.recipeService.getLunch();
    this.dinner = this.recipeService.getDinner();
  }
}
