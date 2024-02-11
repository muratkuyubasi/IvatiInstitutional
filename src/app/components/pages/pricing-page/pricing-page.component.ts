import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pricing-page',
    standalone: true,
    imports: [HeaderStyleTwoComponent, BecomeInstructorPartnerComponent, RouterLink],
    templateUrl: './pricing-page.component.html',
    styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent implements OnInit {

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

}