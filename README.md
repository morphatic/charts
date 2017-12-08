# Morphatic Charts

[![Build Status](https://travis-ci.org/morphatic/charts.svg?branch=master)](https://travis-ci.org/morphatic/charts)
[![Coverage Status](https://coveralls.io/repos/github/morphatic/charts/badge.svg?branch=master)](https://coveralls.io/github/morphatic/charts?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/morphatic/charts.svg)](https://github.com/morphatic/charts/issues)
[![GitHub license](https://img.shields.io/github/license/morphatic/charts.svg)](https://github.com/morphatic/charts/blob/master/LICENSE.md)
[![Maintainability](https://api.codeclimate.com/v1/badges/e4f3881b55e06a56b38d/maintainability)](https://codeclimate.com/github/morphatic/charts/maintainability)

This is a library of [Angular](https://angular.io) components that can create data visualizations using the powerful [d3](https://d3js.org) framework, and the [d3Kit](https://github.com/twitter/d3kit) library, which is designed to make it easier to create reusable d3 code. These charts should also work within [Ionic](https://ionicframework.com) projects, as well.

## Installation

To install, from the root directory of your project type:

```bash
npm i -S d3 d3kit @morphatic/charts
```

The `d3` and `d3Kit` libraries are listed as `peerDependencies` so you have to explicitly install them separately.

Then in the `app.module.ts` file in your project, `import` the `MorphaticChartsModule` and add it to the `imports` array of your `@NgModule` decorator as follows:

```typescript
import { BrowserModule         } from '@angular/platform-browser';
import { NgModule              } from '@angular/core';
import { AppComponent          } from './app.component';
import { MorphaticChartsModule } from '@morphatic/charts';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    MorphaticChartsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
```

At this point, the various different chart components will be available to your templates.

## Using the Chart Components

To use the chart components, all you need to do is add the right tag to the appropriate template, and provide it with data in the correct format. The format of the expected data will differ for each type of chart and will be explained below.

### Bar Charts

Bar charts consist of vertical bars representing the numeric values of a collection of categories or dates.

![Example Bar Chart created with Morphatic Charts](https://i.imgur.com/j8K7nfa.png?1)

In your template you should add a tag as follows:

```html
<bar-chart [data]="barData"></bar-chart>
```

The variable `barData` is an array of `BarDatum` objects which have a pre-defined signature. In your component's `.ts` file, you should have something like:

```typescript
import { Component } from '@angular/core';
import { BarDatum  } from '@morphatic/charts';

@Component({
  selector: 'home-page',
  templateUrl: './home.html'
})
export class HomePage {

  barData: BarDatum[];

  constructor() {
    this.barData = [
      {
        category: "apples",
        value: 12
      },
      {
        category: "oranges",
        value: 7
      },
      {
        category: "pears",
        value: 15
      }
    ];
  }
}
```

This code would generate a bar chart with three bars with the labels shown in the categories. Of course, data can be generated any way you like, e.g. retrieved from a database, pulled from a REST API, etc. It's also possible to change the chart, just by changing the data. The charts are fully styleable with CSS.