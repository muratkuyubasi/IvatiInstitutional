import { Component, OnInit } from '@angular/core';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { HometwelveBlogComponent } from '../home-page-twelve/hometwelve-blog/hometwelve-blog.component';
import { HappyStudentsFeedbackComponent } from '../../common/happy-students-feedback/happy-students-feedback.component';
import { BecomePartnerTeacherComponent } from '../../common/become-partner-teacher/become-partner-teacher.component';
import { InstructorsStyleFourComponent } from '../../common/instructors-style-four/instructors-style-four.component';
import { MakeConnectionsComponent } from '../../common/make-connections/make-connections.component';
import { HomethirteenCoursesComponent } from './homethirteen-courses/homethirteen-courses.component';
import { HomethirteenAboutComponent } from './homethirteen-about/homethirteen-about.component';
import { FeaturesStyeThreeComponent } from '../../common/features-stye-three/features-stye-three.component';
import { HomethirteenPopularCoursesComponent } from './homethirteen-popular-courses/homethirteen-popular-courses.component';
import { HomethirteenMainBannerComponent } from './homethirteen-main-banner/homethirteen-main-banner.component';
import { HeaderStyleSevenComponent } from '../../common/header-style-seven/header-style-seven.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page-thirteen',
  standalone: true,
  imports: [PartnerStyleOneComponent, HometwelveBlogComponent, HappyStudentsFeedbackComponent, BecomePartnerTeacherComponent, InstructorsStyleFourComponent, MakeConnectionsComponent, HomethirteenCoursesComponent, HomethirteenAboutComponent, FeaturesStyeThreeComponent, HomethirteenPopularCoursesComponent, HomethirteenMainBannerComponent, HeaderStyleSevenComponent, RouterLink],
  templateUrl: './home-page-thirteen.component.html',
  styleUrls: ['./home-page-thirteen.component.scss']
})
export class HomePageThirteenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
