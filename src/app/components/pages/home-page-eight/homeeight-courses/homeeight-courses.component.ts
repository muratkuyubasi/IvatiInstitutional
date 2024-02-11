import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../../common/theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-homeeight-courses',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './homeeight-courses.component.html',
    styleUrls: ['./homeeight-courses.component.scss']
})
export class HomeeightCoursesComponent implements OnInit {

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