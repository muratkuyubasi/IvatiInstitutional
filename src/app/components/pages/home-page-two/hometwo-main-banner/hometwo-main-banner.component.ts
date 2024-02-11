import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-hometwo-main-banner',
    standalone: true,
    imports: [CarouselModule, RouterLink],
    templateUrl: './hometwo-main-banner.component.html',
    styleUrls: ['./hometwo-main-banner.component.scss']
})
export class HometwoMainBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    homeSlides: OwlOptions = {
		loop: true,
		nav: true,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		autoHeight: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
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