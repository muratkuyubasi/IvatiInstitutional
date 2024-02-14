import { Component, OnInit } from '@angular/core';
import { HealthSubscribeComponent } from '../../common/health-subscribe/health-subscribe.component';
import { HomenineBlogComponent } from './homenine-blog/homenine-blog.component';
import { HomenineEventsComponent } from './homenine-events/homenine-events.component';
import { HealthQuoteComponent } from '../../common/health-quote/health-quote.component';
import { HomenineCoursesComponent } from './homenine-courses/homenine-courses.component';
import { HealthProgramComponent } from '../../common/health-program/health-program.component';
import { HealthExperienceComponent } from '../../common/health-experience/health-experience.component';
import { FeaturesStyleTwoComponent } from '../../common/features-style-two/features-style-two.component';
import { HomenineMainBannerComponent } from './homenine-main-banner/homenine-main-banner.component';
import { HeaderStyleFiveComponent } from '../../common/header-style-five/header-style-five.component';
import { RouterLink } from '@angular/router';
import { WhyChooseUsComponent } from "../../common/why-choose-us/why-choose-us.component";
import { OfferComponent } from "../../common/offer/offer.component";
import { CategoriesStyleTwoComponent } from "../../common/categories-style-two/categories-style-two.component";
import { CategoriesStyleThreeComponent } from "../../common/categories-style-three/categories-style-three.component";
import { InstructorsStyleThreeComponent } from "../../common/instructors-style-three/instructors-style-three.component";

@Component({
    selector: 'app-home-page-nine',
    standalone: true,
    templateUrl: './home-page-nine.component.html',
    styleUrls: ['./home-page-nine.component.scss'],
    imports: [HealthSubscribeComponent, HomenineBlogComponent, HomenineEventsComponent, HealthQuoteComponent, HomenineCoursesComponent, HealthProgramComponent, HealthExperienceComponent, FeaturesStyleTwoComponent, HomenineMainBannerComponent, HeaderStyleFiveComponent, RouterLink, WhyChooseUsComponent, OfferComponent, CategoriesStyleTwoComponent, CategoriesStyleThreeComponent, InstructorsStyleThreeComponent]
})
export class HomePageNineComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

}