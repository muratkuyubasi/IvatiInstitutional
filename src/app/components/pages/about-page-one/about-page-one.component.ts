import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../../common/theme-customizer/theme-customizer.service';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { FeedbackStyleTwoComponent } from '../../common/feedback-style-two/feedback-style-two.component';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { InstructorsStyleTwoComponent } from '../../common/instructors-style-two/instructors-style-two.component';
import { OurValuesComponent } from '../../common/our-values/our-values.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { OurStoryComponent } from '../../common/our-story/our-story.component';
import { OurMissionComponent } from '../../common/our-mission/our-mission.component';
import { RouterLink } from '@angular/router';
import { HeaderStyleOneComponent } from "../../common/header-style-one/header-style-one.component";
import { OurGrowthComponent } from "../../common/our-growth/our-growth.component";
import { HeaderStyleFiveComponent } from "../../common/header-style-five/header-style-five.component";

@Component({
    selector: 'app-about-page-one',
    standalone: true,
    templateUrl: './about-page-one.component.html',
    styleUrls: ['./about-page-one.component.scss'],
    imports: [HeaderStyleTwoComponent, BecomeInstructorPartnerComponent, FeedbackStyleTwoComponent, PartnerStyleOneComponent, InstructorsStyleTwoComponent, OurValuesComponent, FunfactsComponent, OurStoryComponent, OurMissionComponent, RouterLink, HeaderStyleOneComponent, OurGrowthComponent, HeaderStyleFiveComponent]
})
export class AboutPageOneComponent implements OnInit {

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