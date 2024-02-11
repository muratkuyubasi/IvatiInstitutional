import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homefourteen-about',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './homefourteen-about.component.html',
    styleUrls: ['./homefourteen-about.component.scss']
})
export class HomefourteenAboutComponent implements OnInit {

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