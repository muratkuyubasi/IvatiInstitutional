import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-events-details-page',
    standalone: true,
    imports: [HeaderStyleTwoComponent, RouterLink],
    templateUrl: './events-details-page.component.html',
    styleUrls: ['./events-details-page.component.scss']
})
export class EventsDetailsPageComponent implements OnInit {

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