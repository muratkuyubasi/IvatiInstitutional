import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { CountUpModule } from 'ngx-countup';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-funfacts-feedback',
    standalone: true,
    imports: [CountUpModule, CarouselModule, RouterLink],
    templateUrl: './funfacts-feedback.component.html',
    styleUrls: ['./funfacts-feedback.component.scss']
})
export class FunfactsFeedbackComponent implements OnInit {

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

    feedbackSlidesTwo: OwlOptions = {
        items: 1,
		loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoHeight: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }

}