import { Component, OnInit } from '@angular/core';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { FeedbackStyleOneComponent } from '../../common/feedback-style-one/feedback-style-one.component';
import { InstructorsStyleThreeComponent } from '../../common/instructors-style-three/instructors-style-three.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { HomesixCoursesComponent } from './homesix-courses/homesix-courses.component';
import { CategoriesStyleThreeComponent } from '../../common/categories-style-three/categories-style-three.component';
import { HomesixMainBannerComponent } from './homesix-main-banner/homesix-main-banner.component';
import { HeaderStyleFourComponent } from '../../common/header-style-four/header-style-four.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page-six',
  standalone: true,
  imports: [BecomeInstructorPartnerComponent, FeedbackStyleOneComponent, InstructorsStyleThreeComponent, FunfactsComponent, FeaturesComponent, HomesixCoursesComponent, CategoriesStyleThreeComponent, HomesixMainBannerComponent, HeaderStyleFourComponent, RouterLink],
  templateUrl: './home-page-six.component.html',
  styleUrls: ['./home-page-six.component.scss']
})
export class HomePageSixComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
