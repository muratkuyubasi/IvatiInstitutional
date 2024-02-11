import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeone-main-banner',
    standalone: true,
    imports: [CarouselModule, RouterLink],
    templateUrl: './homeone-main-banner.component.html',
    styleUrls: ['./homeone-main-banner.component.scss']
})
export class HomeoneMainBannerComponent implements OnInit {

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

    missionSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-left-arrow-alt'></i>",
			"<i class='bx bx-right-arrow-alt'></i>"
		]
    }

    gymHomeSlides: OwlOptions = {
        autoplayHoverPause: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoHeight: true,
        autoplay: true,
        dots: false,
        loop: true,
        nav: true,
        items: 1,
        navText: [
            "<i class='flaticon-arrows'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ]
    }
}