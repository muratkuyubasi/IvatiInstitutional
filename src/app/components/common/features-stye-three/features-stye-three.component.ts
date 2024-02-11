import { Component, OnInit } from '@angular/core';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-features-stye-three',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './features-stye-three.component.html',
    styleUrls: ['./features-stye-three.component.scss']
})
export class FeaturesStyeThreeComponent implements OnInit {

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