import { Component, OnInit } from '@angular/core';
import lgVideo from 'lightgallery/plugins/video';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { ThemeCustomizerService } from '../theme-customizer/theme-customizer.service';
import { NgClass, NgFor } from '@angular/common';
import { LightgalleryModule } from 'lightgallery/angular';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [NgClass, LightgalleryModule, RouterLink, NgFor],
    templateUrl: './faq.component.html',
    styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

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

    settings = {
        counter: false,
        plugins: [lgVideo]
    };
    onBeforeSlide = (detail: BeforeSlideDetail): void => {
        const { index, prevIndex } = detail;
        console.log(index, prevIndex);
    };

    accordionItems = [
        {
            title: 'What are the different types of undergraduate degrees?',
            content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
            open: false
        },
        {
            title: 'What are the different types of graduate degrees?',
            content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
            open: false
        },
        {
            title: 'Can you work while studying in the United States?',
            content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
            open: false
        },
        {
            title: 'What is distance education?',
            content: 'Associate: a two-year program that either leads to a specific vocation or transitions to a bachelor program. Bachelor: a four or five-year program where students earn credits in a wide variety of courses.',
            open: false
        }
    ];

    selectedItem = null;

    toggleAccordionItem(item) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }

}