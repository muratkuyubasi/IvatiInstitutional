import { ThemeCustomizerService } from '../app/components/common/theme-customizer/theme-customizer.service';
import { Location, LocationStrategy, NgIf, PathLocationStrategy } from '@angular/common';
import { Router, NavigationCancel, NavigationEnd, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ThemeCustomizerComponent } from './components/common/theme-customizer/theme-customizer.component';
import { FooterComponent } from './components/common/footer/footer.component';
declare let $: any;

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ThemeCustomizerComponent, RouterOutlet, NgIf, AppComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class AppComponent {
    
    title: any;
    location: any;
    isToggled = false;
    routerSubscription: any;

    constructor(
        private router: Router,
        public themeService: ThemeCustomizerService
    ) {
        this.themeService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }

    ngOnInit(){
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
        .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
        .subscribe(event => {
            this.location = this.router.url;
            if (!(event instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
    
}