import { Component, OnInit } from '@angular/core';
import { PartnerStyleOneComponent } from '../../common/partner-style-one/partner-style-one.component';
import { LanguageSubscribeComponent } from '../../common/language-subscribe/language-subscribe.component';
import { HomeeightBlogComponent } from '../home-page-eight/homeeight-blog/homeeight-blog.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { HomeeightEventsComponent } from '../home-page-eight/homeeight-events/homeeight-events.component';
import { HowToApplyComponent } from '../../common/how-to-apply/how-to-apply.component';
import { StudentsFeedbackComponent } from '../../common/students-feedback/students-feedback.component';
import { FunfactsStyleTwoComponent } from '../../common/funfacts-style-two/funfacts-style-two.component';
import { HomeeightCoursesComponent } from '../home-page-eight/homeeight-courses/homeeight-courses.component';
import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';
import { LanguageCategoryComponent } from '../../common/language-category/language-category.component';
import { HometenMainBannerComponent } from './hometen-main-banner/hometen-main-banner.component';
import { HeaderStyleFiveComponent } from '../../common/header-style-five/header-style-five.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page-ten',
  standalone: true,
  imports: [PartnerStyleOneComponent, LanguageSubscribeComponent, HomeeightBlogComponent, FreeTrialComponent, HomeeightEventsComponent, HowToApplyComponent, StudentsFeedbackComponent, FunfactsStyleTwoComponent, HomeeightCoursesComponent, WhyChooseUsComponent, LanguageCategoryComponent, HometenMainBannerComponent, HeaderStyleFiveComponent, RouterLink],
  templateUrl: './home-page-ten.component.html',
  styleUrls: ['./home-page-ten.component.scss']
})
export class HomePageTenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
