import { AppComponent} from "./app.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { RecipeComponent } from "./components/recipe/recipe.component";



const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipe', component: RecipeComponent}
]

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        RecipeComponent
    ],

    providers: [

    ],

    bootstrap: [
        AppComponent]
})

export class AppModule {}