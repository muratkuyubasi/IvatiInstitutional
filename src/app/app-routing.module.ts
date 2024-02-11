import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageOneComponent } from './components/pages/home-page-one/home-page-one.component';
import { HomePageTwoComponent } from './components/pages/home-page-two/home-page-two.component';
import { HomePageThreeComponent } from './components/pages/home-page-three/home-page-three.component';
import { HomePageFourComponent } from './components/pages/home-page-four/home-page-four.component';
import { HomePageFiveComponent } from './components/pages/home-page-five/home-page-five.component';
import { HomePageSixComponent } from './components/pages/home-page-six/home-page-six.component';
import { HomePageSevenComponent } from './components/pages/home-page-seven/home-page-seven.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { InstructorsPageOneComponent } from './components/pages/instructors-page-one/instructors-page-one.component';
import { InstructorsPageTwoComponent } from './components/pages/instructors-page-two/instructors-page-two.component';
import { InstructorsPageThreeComponent } from './components/pages/instructors-page-three/instructors-page-three.component';
import { InstructorsDetailsPageComponent } from './components/pages/instructors-details-page/instructors-details-page.component';
import { EventsPageComponent } from './components/pages/events-page/events-page.component';
import { EventsDetailsPageComponent } from './components/pages/events-details-page/events-details-page.component';
import { GalleryPageComponent } from './components/pages/gallery-page/gallery-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { FeedbackPageComponent } from './components/pages/feedback-page/feedback-page.component';
import { PartnerPageComponent } from './components/pages/partner-page/partner-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ErrorPageComponent } from './components/pages/error-page/error-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogFullWidthPageComponent } from './components/pages/blog-full-width-page/blog-full-width-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { ShopGridPageComponent } from './components/pages/shop-grid-page/shop-grid-page.component';
import { ShopFullWidthPageComponent } from './components/pages/shop-full-width-page/shop-full-width-page.component';
import { ProductsDetailsPageComponent } from './components/pages/products-details-page/products-details-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { CategoryPageOneComponent } from './components/pages/category-page-one/category-page-one.component';
import { CategoryPageTwoComponent } from './components/pages/category-page-two/category-page-two.component';
import { CategoryPageThreeComponent } from './components/pages/category-page-three/category-page-three.component';
import { CoursesListPageComponent } from './components/pages/courses-list-page/courses-list-page.component';
import { CoursesDetailsPageComponent } from './components/pages/courses-details-page/courses-details-page.component';
import { MyDashboardPageComponent } from './components/pages/my-dashboard-page/my-dashboard-page.component';
import { OrdersPageComponent } from './components/pages/orders-page/orders-page.component';
import { DownloadsPageComponent } from './components/pages/downloads-page/downloads-page.component';
import { EditAddressPageComponent } from './components/pages/edit-address-page/edit-address-page.component';
import { EditAccountPageComponent } from './components/pages/edit-account-page/edit-account-page.component';
import { EditBillingAddressPageComponent } from './components/pages/edit-billing-address-page/edit-billing-address-page.component';
import { EditShippingAddressPageComponent } from './components/pages/edit-shipping-address-page/edit-shipping-address-page.component';
import { HomePageEightComponent } from './components/pages/home-page-eight/home-page-eight.component';
import { HomePageNineComponent } from './components/pages/home-page-nine/home-page-nine.component';
import { HomePageTenComponent } from './components/pages/home-page-ten/home-page-ten.component';
import { HomePageElevenComponent } from './components/pages/home-page-eleven/home-page-eleven.component';
import { HomePageTwelveComponent } from './components/pages/home-page-twelve/home-page-twelve.component';
import { HomePageThirteenComponent } from './components/pages/home-page-thirteen/home-page-thirteen.component';
import { HomePageFourteenComponent } from './components/pages/home-page-fourteen/home-page-fourteen.component';
import { CoursesGsocFourPageComponent } from './components/pages/courses-gsoc-four-page/courses-gsoc-four-page.component';
import { CoursesGsocThreePageComponent } from './components/pages/courses-gsoc-three-page/courses-gsoc-three-page.component';
import { CoursesGsocTwoPageComponent } from './components/pages/courses-gsoc-two-page/courses-gsoc-two-page.component';
import { CoursesGstcFourPageComponent } from './components/pages/courses-gstc-four-page/courses-gstc-four-page.component';
import { CoursesGstcThreePageComponent } from './components/pages/courses-gstc-three-page/courses-gstc-three-page.component';
import { CoursesGstcTwoPageComponent } from './components/pages/courses-gstc-two-page/courses-gstc-two-page.component';
import { CoursesGstwcFourPageComponent } from './components/pages/courses-gstwc-four-page/courses-gstwc-four-page.component';
import { CoursesGstwcThreePageComponent } from './components/pages/courses-gstwc-three-page/courses-gstwc-three-page.component';
import { CoursesGstwcTwoPageComponent } from './components/pages/courses-gstwc-two-page/courses-gstwc-two-page.component';

export const routes: Routes = [

    {path: '', component: HomePageOneComponent},
    {path: 'about', component: AboutPageOneComponent},
    {path: 'unser-team', component: InstructorsPageOneComponent},
    {path: 'contact', component: ContactPageComponent},



    {path: 'index-2', component: HomePageTwoComponent},
    {path: 'index-3', component: HomePageThreeComponent},
    {path: 'index-4', component: HomePageFourComponent},
    {path: 'index-5', component: HomePageFiveComponent},
    {path: 'index-6', component: HomePageSixComponent},
    {path: 'index-7', component: HomePageSevenComponent},
    {path: 'index-8', component: HomePageEightComponent},
    {path: 'index-9', component: HomePageNineComponent},
    {path: 'index-10', component: HomePageTenComponent},
    {path: 'index-11', component: HomePageElevenComponent},
    {path: 'index-12', component: HomePageTwelveComponent},
    {path: 'index-13', component: HomePageThirteenComponent},
    {path: 'index-14', component: HomePageFourteenComponent},
    {path: 'about-style-2', component: AboutPageTwoComponent},
    {path: 'instructor-2', component: InstructorsPageTwoComponent},
    {path: 'instructor-3', component: InstructorsPageThreeComponent},
    {path: 'single-instructor', component: InstructorsDetailsPageComponent},
    {path: 'gallery', component: GalleryPageComponent},
    {path: 'events', component: EventsPageComponent},
    {path: 'single-events', component: EventsDetailsPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'feedback', component: FeedbackPageComponent},
    {path: 'partner', component: PartnerPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'faqs', component: FaqPageComponent},
    {path: 'error-404', component: ErrorPageComponent},
    {path: 'coming-soon', component: ComingSoonPageComponent},
    {path: 'courses-category-style-1', component: CategoryPageOneComponent},
    {path: 'courses-category-style-2', component: CategoryPageTwoComponent},
    {path: 'courses-category-style-3', component: CategoryPageThreeComponent},
    {path: 'courses-list', component: CoursesListPageComponent},
    {path: 'courses-2-columns-style-1', component: CoursesGsocTwoPageComponent},
    {path: 'courses-3-columns-style-1', component: CoursesGsocThreePageComponent},
    {path: 'courses-4-columns-style-1', component: CoursesGsocFourPageComponent},
    {path: 'courses-2-columns-style-2', component: CoursesGstwcTwoPageComponent},
    {path: 'courses-3-columns-style-2', component: CoursesGstwcThreePageComponent},
    {path: 'courses-4-columns-style-2', component: CoursesGstwcFourPageComponent},
    {path: 'courses-2-columns-style-3', component: CoursesGstcTwoPageComponent},
    {path: 'courses-3-columns-style-3', component: CoursesGstcThreePageComponent},
    {path: 'courses-4-columns-style-3', component: CoursesGstcFourPageComponent},
    {path: 'single-courses', component: CoursesDetailsPageComponent},
    {path: 'my-dashboard', component: MyDashboardPageComponent},
    {path: 'orders', component: OrdersPageComponent},
    {path: 'downloads', component: DownloadsPageComponent},
    {path: 'edit-address', component: EditAddressPageComponent},
    {path: 'edit-account', component: EditAccountPageComponent},
    {path: 'edit-billing-address', component: EditBillingAddressPageComponent},
    {path: 'edit-shipping-address', component: EditShippingAddressPageComponent},
    {path: 'blog-style-1', component: BlogGridPageComponent},
    {path: 'blog-style-2', component: BlogRightSidebarPageComponent},
    {path: 'blog-style-3', component: BlogFullWidthPageComponent},
    {path: 'single-blog', component: BlogDetailsPageComponent},
    {path: 'shop-grid', component: ShopGridPageComponent},
    {path: 'shop-grid-fullwidth', component: ShopFullWidthPageComponent},
    {path: 'single-products', component: ProductsDetailsPageComponent},
    {path: 'cart', component: CartPageComponent},
    {path: 'checkout', component: CheckoutPageComponent},
    // Here add new pages component
    
    {path: '**', component: ErrorPageComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }