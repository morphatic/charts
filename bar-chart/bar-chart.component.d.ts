import { OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { ScaleOrdinal } from 'd3-scale';
import { SvgChart } from 'd3kit';
import { BarDatum } from '../types';
export declare class BarChartComponent extends SvgChart implements OnChanges {
    private el;
    bcdata: BarDatum[];
    colors: ScaleOrdinal<string | number | Date, string>;
    private xScale;
    private yScale;
    private xAxisG;
    private yAxisG;
    constructor(el: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    draw(): void;
}
