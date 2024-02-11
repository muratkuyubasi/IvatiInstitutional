import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-header-style-four',
    standalone: true,
    imports: [RouterLinkActive, NgClass, RouterLink],
    templateUrl: './header-style-four.component.html',
    styleUrls: ['./header-style-four.component.scss']
})
export class HeaderStyleFourComponent implements OnInit {

    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

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

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    classApplied3 = false;
    toggleClass3() {
        this.classApplied3 = !this.classApplied3;
    }

}