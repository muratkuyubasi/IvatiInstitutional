import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { HeaderStyleOneComponent } from "../../common/header-style-one/header-style-one.component";

@Component({
    selector: 'app-contact-page',
    standalone: true,
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
    imports: [HeaderStyleTwoComponent, ReactiveFormsModule, FormsModule, RouterLink, NgIf, HeaderStyleOneComponent]
})
export class ContactPageComponent implements OnInit {

    isToggled = false;
	
    constructor(
        public themeService: ThemeCustomizerService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    ngOnInit(): void {}

    submit(form){
        var name = form.name;
        console.log(name);
        
        var email = form.email;
        console.log(email);

        var number = form.number;
        console.log(number);
        
        var subject = form.subject;
        console.log(subject);
        
        var message = form.message;
        console.log(message);
    }

}