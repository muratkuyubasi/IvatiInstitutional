import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { LightgalleryModule } from 'lightgallery/angular';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-hometwelve-main-banner',
    standalone: true,
    imports: [LightgalleryModule, RouterLink],
    templateUrl: './hometwelve-main-banner.component.html',
    styleUrls: ['./hometwelve-main-banner.component.scss']
})
export class HometwelveMainBannerComponent implements OnInit {

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

    settings = {
        counter: false,
        plugins: [lgVideo]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

}