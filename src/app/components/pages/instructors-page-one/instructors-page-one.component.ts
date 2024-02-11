import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { RouterLink } from '@angular/router';
import { HeaderStyleOneComponent } from "../../common/header-style-one/header-style-one.component";

@Component({
    selector: 'app-instructors-page-one',
    standalone: true,
    templateUrl: './instructors-page-one.component.html',
    styleUrls: ['./instructors-page-one.component.scss'],
    imports: [HeaderStyleTwoComponent, BecomeInstructorPartnerComponent, RouterLink, HeaderStyleOneComponent]
})
export class InstructorsPageOneComponent implements OnInit {

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