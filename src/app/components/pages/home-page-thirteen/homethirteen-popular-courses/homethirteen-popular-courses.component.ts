import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homethirteen-popular-courses',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './homethirteen-popular-courses.component.html',
    styleUrls: ['./homethirteen-popular-courses.component.scss']
})
export class HomethirteenPopularCoursesComponent implements OnInit {

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