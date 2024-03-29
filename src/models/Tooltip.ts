/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Box } from './Box';
import {
    BoxFromJSON,
    BoxFromJSONTyped,
    BoxToJSON,
} from './Box';
import type { Image } from './Image';
import {
    ImageFromJSON,
    ImageFromJSONTyped,
    ImageToJSON,
} from './Image';
import type { PositionOnDevice } from './PositionOnDevice';
import {
    PositionOnDeviceFromJSON,
    PositionOnDeviceFromJSONTyped,
    PositionOnDeviceToJSON,
} from './PositionOnDevice';
import type { Text } from './Text';
import {
    TextFromJSON,
    TextFromJSONTyped,
    TextToJSON,
} from './Text';
import type { TooltipBlock } from './TooltipBlock';
import {
    TooltipBlockFromJSON,
    TooltipBlockFromJSONTyped,
    TooltipBlockToJSON,
} from './TooltipBlock';

/**
 * Tooltip parameters
 * @export
 * @interface Tooltip
 */
export interface Tooltip {
    /**
     * 
     * @type {Image}
     * @memberof Tooltip
     */
    image: Image;
    /**
     * 
     * @type {Text}
     * @memberof Tooltip
     */
    title: Text;
    /**
     * 
     * @type {PositionOnDevice}
     * @memberof Tooltip
     */
    position: PositionOnDevice;
    /**
     * 
     * @type {TooltipBlock}
     * @memberof Tooltip
     */
    styles: TooltipBlock;
    /**
     * 
     * @type {Box}
     * @memberof Tooltip
     */
    box: Box;
}

/**
 * Check if a given object implements the Tooltip interface.
 */
export function instanceOfTooltip(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "image" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "position" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "box" in value;

    return isInstance;
}

export function TooltipFromJSON(json: any): Tooltip {
    return TooltipFromJSONTyped(json, false);
}

export function TooltipFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tooltip {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'image': ImageFromJSON(json['image']),
        'title': TextFromJSON(json['title']),
        'position': PositionOnDeviceFromJSON(json['position']),
        'styles': TooltipBlockFromJSON(json['styles']),
        'box': BoxFromJSON(json['box']),
    };
}

export function TooltipToJSON(value?: Tooltip | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'image': ImageToJSON(value.image),
        'title': TextToJSON(value.title),
        'position': PositionOnDeviceToJSON(value.position),
        'styles': TooltipBlockToJSON(value.styles),
        'box': BoxToJSON(value.box),
    };
}

