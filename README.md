# This is a fork of [ngx-loading](https://github.com/mimrot47/ngx-loading)

The original library still has no Angular v20 support. This fork has been updated to Angular v20, but I hope the original author will return and update the library..

# ngx-loading

A customisable loading spinner for Angular applications.

[![npm version](https://badge.fury.io/js/ngx-loading-reloaded.svg)](https://badge.fury.io/js/ngx-loading-reloaded)
[![Monthly Downloads](https://img.shields.io/npm/dm/ngx-loading-reloaded)]()

![ngx-loading-reloaded](https://cloud.githubusercontent.com/assets/26901242/25317405/05a1ce4a-2870-11e7-8693-ed2394b54cba.gif)

## Table of contents

1. [Demo](#demo)
2. [Installation](#installation)
3. [Getting started](#getting-started)
4. [Input parameters](#input-parameters)
5. [Config options](#config-options)

## Demo

Check out the interactive demo on [StackBlitz](https://stackblitz.com/edit/ngx-loading-sample?file=src/app/app.component.html "ngx-loading StackBlitz demo").

## Installation

Install ngx-loading via NPM, using the command below.

### NPM

```shell
npm install --save ngx-loading-ng20
```

**NOTE:** This package supports only Angular 20 (and maybe later if the original author doesn't come back and as long as I continue maintaining this library). If you require an older version of Angular, please use the original package.

## Getting started

Import the `INgxLoadingConfig, ngxLoadingAnimationTypes, NgxLoadingComponent` component:

```typescript
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { INgxLoadingConfig, ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading-ng20';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgxLoadingComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  loading = false;
  config: INgxLoadingConfig = {
    animationType: ngxLoadingAnimationTypes.CircleSwish, // Animation type
    backdropBackgroundColour: 'rgba(0,0,0,0.4)',
    fullScreenBackdrop: true,
    primaryColour: '#00BCD4',
    secondaryColour: '#E91E63',
    tertiaryColour: '#FFEB3B',
  };
}

```

You must create a boolean variable (e.g. `loading` below) that is accessible from the component which will contain ngx-loading. This boolean is used as an input into ngx-loading, and will determine when the loading spinner is visible.

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  //...
})
export class AppComponent implements OnInit {
  //...
  public loading = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  Login() {
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe(
      (res) => {
        this.loading = false;
        //...
      },
      (err) => {
        this.loading = false;
        //...
      }
    );
  }
}
```

Next, add the ngx-loading component selector to your application component's template. Set the `[show]` input variable of ngx-loading to point to your boolean, which will determine when ngx-loading is visible. Optionally set the `[config]` input variable of ngx-loading to setup custom configuration options. If the `[config]` input variable is not set, the globally configured configuration will be used, if set. If no config options are set, the ngx-loading default config options will be used. See [Config options](#config-options) for further information.

You can also optionally define a `[template]` input variable, which can be used to inject your own custom templates into the component.

NOTE: ngx-loading will fill the entirety of its parent component. If you wish for ngx-loading to only fill a specific element within your component, ensure that ngx-loading is a child element of that element, and that the containing element has its `position` attribute set to `relative`.

```html
<div class="my-container">
  <ng-template #customLoadingTemplate>
    <div class="custom-class">
      <h3>Loading...</h3>
      <button (click)="showAlert()">Click me!</button>
    </div>
  </ng-template>

  <ngx-loading
    [show]="loading"
    [config]="{ backdropBorderRadius: '3px' }"
    [template]="customLoadingTemplate"
  ></ngx-loading>
  //...
</div>
```

## Input parameters

| Input    | Required | Details                                                                                                                                                                                                                                                         |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| show     | Required | A boolean, which will determine when ngx-loading is visible.                                                                                                                                                                                                    |
| config   | Optional | A set of configuration options for ngx-loading. If this is not specified, the globally configured configuration will be used, if set. If no config options are set, the ngx-loading default config options will be used. See [Config options](#config-options). |
| template | Optional | A TemplateRef, which will be displayed within the ngx-loading component. Use this to inject your own custom templates into the component.                                                                                                                       |

## Config options

| Option                   | Required | Default                              | Details                                                                                                         |
| ------------------------ | -------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| animationType            | Optional | ngxLoadingAnimationTypes.threeBounce | The animation to be used within ngx-loading. Use the ngxLoadingAnimationTypes constant to select valid options. |
| backdropBorderRadius     | Optional | 0                                    | The border-radius to be applied to the ngx-loading backdrop, e.g. '14px'.                                       |
| backdropBackgroundColour | Optional | rgba(0, 0, 0, 0.3)                   | The background-color to be applied to the ngx-loading backdrop, e.g. 'rgba(255, 255, 255, 0.2)'.                |
| fullScreenBackdrop       | Optional | false                                | Set to true to make the backdrop full screen, with the loading animation centered in the middle of the screen.  |
| primaryColour            | Optional | #ffffff                              | The primary colour, which will be applied to the ngx-loading animation.                                         |
| secondaryColour          | Optional | #ffffff                              | The secondary colour, which will be applied to the ngx-loading animation (where appropriate).                   |
| tertiaryColour           | Optional | #ffffff                              | The tertiary colour, which will be applied to the ngx-loading animation (where appropriate).                    |

