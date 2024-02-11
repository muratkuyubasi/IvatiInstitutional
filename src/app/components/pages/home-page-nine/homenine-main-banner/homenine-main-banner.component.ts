import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homenine-main-banner',
    standalone: true,
    imports: [CarouselModule, RouterLink],
    templateUrl: './homenine-main-banner.component.html',
    styleUrls: ['./homenine-main-banner.component.scss']
})
export class HomenineMainBannerComponent implements OnInit {

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

    healthCoachingBannerSlides: OwlOptions = {
        items: 1,
        nav: true,
		loop: true,
        dots: false,
        autoplay: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }

}