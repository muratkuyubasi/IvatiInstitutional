import { Component, OnInit } from '@angular/core';
import { HeaderStyleOneComponent } from '../../common/header-style-one/header-style-one.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { FeedbackStyleOneComponent } from '../../common/feedback-style-one/feedback-style-one.component';
import { BecomeInstructorPartnerComponent } from '../../common/become-instructor-partner/become-instructor-partner.component';
import { InstructorsStyleOneComponent } from '../../common/instructors-style-one/instructors-style-one.component';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { HomeoneCoursesComponent } from './homeone-courses/homeone-courses.component';
import { FunfactsComponent } from '../../common/funfacts/funfacts.component';
import { CategoriesStyleOneComponent } from '../../common/categories-style-one/categories-style-one.component';
import { HomeoneAboutComponent } from './homeone-about/homeone-about.component';
import { HomeoneMainBannerComponent } from './homeone-main-banner/homeone-main-banner.component';
import { RouterLink } from '@angular/router';
import { LanguageCategoryComponent } from "../../common/language-category/language-category.component";
import { WhyChooseUsComponent } from "../../common/why-choose-us/why-choose-us.component";
import { OfferComponent } from "../../common/offer/offer.component";

@Component({
    selector: 'app-home-page-one',
    standalone: true,
    templateUrl: './home-page-one.component.html',
    styleUrls: ['./home-page-one.component.scss'],
    imports: [HeaderStyleOneComponent, BlogComponent, FeedbackStyleOneComponent, BecomeInstructorPartnerComponent, InstructorsStyleOneComponent, PartnerStyleOneComponent, HomeoneCoursesComponent, FunfactsComponent, CategoriesStyleOneComponent, HomeoneAboutComponent, HomeoneMainBannerComponent, RouterLink, LanguageCategoryComponent, WhyChooseUsComponent, OfferComponent]
})
export class HomePageOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
