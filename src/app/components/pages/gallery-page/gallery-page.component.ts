import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxModule } from 'ngx-lightbox';
import { HeaderStyleTwoComponent } from '../../common/header-style-two/header-style-two.component';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-gallery-page',
    standalone: true,
    imports: [HeaderStyleTwoComponent, RouterLink, LightboxModule, NgIf, NgFor],
    templateUrl: './gallery-page.component.html',
    styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent implements OnInit {

    ngOnInit(): void {}

    public _album = [];
    constructor(public _lightbox: Lightbox) {
        for (let i = 1; i <= 9; i++) {
            const src = 'assets/img/gallery/gallery' + i + '.jpg';
            const caption = 'Image ' + i;
            const thumb = 'assets/img/gallery/gallery' + i + '.jpg';
            const album = {
                src: src,
                caption: caption,
                thumb: thumb
            };
            this._album.push(album);
        }
    }
 
    open(index: number): void {
        // open lightbox
        this._lightbox.open(this._album, index);
    }
    
    close(): void {
        // close lightbox programmatically
        this._lightbox.close();
    }

}