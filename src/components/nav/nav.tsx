import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-nav',
  styleUrl: 'nav.css'
})
export class nav {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Nav</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-nav id="nav-example" root="nav-example-page"></ion-nav>
      </ion-content>
    ];
  }
}
