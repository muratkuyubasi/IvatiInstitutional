import { Component, OnInit } from '@angular/core';
import { HealthSubscribeComponent } from '../../common/health-subscribe/health-subscribe.component';
import { StartFreeCoursesComponent } from '../../common/start-free-courses/start-free-courses.component';
import { InstructorsStyleFourComponent } from '../../common/instructors-style-four/instructors-style-four.component';
import { MakeConnectionsComponent } from '../../common/make-connections/make-connections.component';
import { FreeTrialTwoComponent } from '../../common/free-trial-two/free-trial-two.component';
import { HappyStudentsFeedbackComponent } from '../../common/happy-students-feedback/happy-students-feedback.component';
import { HomethirteenCoursesComponent } from '../home-page-thirteen/homethirteen-courses/homethirteen-courses.component';
import { FreeTrialFormComponent } from '../../common/free-trial-form/free-trial-form.component';
import { FunfactsStyleFourComponent } from '../../common/funfacts-style-four/funfacts-style-four.component';
import { HomefourteenAboutComponent } from './homefourteen-about/homefourteen-about.component';
import { HomethirteenPopularCoursesComponent } from '../home-page-thirteen/homethirteen-popular-courses/homethirteen-popular-courses.component';
import { FeaturesStyeThreeComponent } from '../../common/features-stye-three/features-stye-three.component';
import { HomefourteenMainBannerComponent } from './homefourteen-main-banner/homefourteen-main-banner.component';
import { HeaderStyleSevenComponent } from '../../common/header-style-seven/header-style-seven.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home-page-fourteen',
    standalone: true,
    imports: [HealthSubscribeComponent, StartFreeCoursesComponent, InstructorsStyleFourComponent, MakeConnectionsComponent, FreeTrialTwoComponent, HappyStudentsFeedbackComponent, HomethirteenCoursesComponent, FreeTrialFormComponent, FunfactsStyleFourComponent, HomefourteenAboutComponent, HomethirteenPopularCoursesComponent, FeaturesStyeThreeComponent, HomefourteenMainBannerComponent, HeaderStyleSevenComponent, RouterLink],
    templateUrl: './home-page-fourteen.component.html',
    styleUrls: ['./home-page-fourteen.component.scss']
})
export class HomePageFourteenComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}