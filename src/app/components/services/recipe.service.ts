import { Injectable } from "@angular/core";
import { Recipe } from "../model/recipe.model";

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    private breakfast: Recipe[] = [
        { id: 1, name: 'Tapsilog', description: 'A classic Filipino breakfast of tapa (marinated beef), garlic rice, and fried egg.', img: 'assets/img/recipe__img1.jpg' },
        { id: 2, name: 'Tocilog', description: 'Sweet cured pork (tocino) served with garlic rice and fried egg.', img: 'assets/img/recipe__img2.jpg' },
        { id: 3, name: 'Longsilog', description: 'Filipino sausage (longganisa) paired with garlic rice and fried egg.', img: 'assets/img/recipe__img3.jpg' },
        { id: 4, name: 'Champorado', description: 'Chocolate rice porridge served with milk and optional dried fish (tuyo).', img: 'assets/img/recipe__img4.jpg' },
        { id: 5, name: 'Pandesal with Coffee', description: 'Soft bread rolls (pandesal) paired with a hot cup of Filipino coffee.', img: 'assets/img/recipe__img5.jpg' }
    ];
    
    private lunch: Recipe[] = [
        { id: 1, name: 'Grilled Chicken Salad', description: 'Juicy grilled chicken served on fresh greens.', img: 'assets/img/recipe__img6.jpg' },
        { id: 2, name: 'Spaghetti Carbonara', description: 'Classic pasta dish with creamy sauce and bacon.', img: 'assets/img/recipe__img7.jpg' },
        { id: 3, name: 'Vegetable Stir Fry', description: 'Crisp vegetables sautéed with savory sauce.', img: 'assets/img/recipe__img8.jpg' },
        { id: 4, name: 'Chicken Wrap', description: 'A tortilla wrap filled with chicken and veggies.', img: 'assets/img/recipe__img9.jpg' },
        { id: 5, name: 'Fish Tacos', description: 'Crispy fish served in tortillas with toppings.', img: 'assets/img/recipe__img10.jpg' }
    ];

    private dinner: Recipe[] = [
        { id: 1, name: 'Beef Stew', description: 'Slow-cooked beef with vegetables in a hearty broth.', img: 'assets/img/recipe__img11.jpg' },
        { id: 2, name: 'Baked Salmon', description: 'Tender salmon fillet baked with herbs and spices.', img: 'assets/img/recipe__img12.jpg' },
        { id: 3, name: 'Chicken Alfredo', description: 'Creamy pasta dish with grilled chicken.', img: 'assets/img/recipe__img13.jpg' },
        { id: 4, name: 'Vegetarian Lasagna', description: 'Layers of pasta, vegetables, and cheesy goodness.', img: 'assets/img/recipe__img14.jpg' },
        { id: 5, name: 'Stuffed Bell Peppers', description: 'Bell peppers filled with rice, meat, and spices.', img: 'assets/img/recipe__img15.jpg' }
    ];

    getBreakfast(): Recipe[] {
        return this.breakfast;
    }

    getLunch(): Recipe[] {
        return this.lunch;
    }

    getDinner(): Recipe[] {
        return this.dinner;
    }
}
