/* tslint:disable */
/* eslint-disable */
/**
 * Onboarding online screens graph models
 * Onboarding online screens graph models and interfaces
 *
 * The version of the OpenAPI document: 1.1.0-alpha.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BasicScreenBlock } from './BasicScreenBlock';
import {
    BasicScreenBlockFromJSON,
    BasicScreenBlockFromJSONTyped,
    BasicScreenBlockToJSON,
} from './BasicScreenBlock';
import type { Callback } from './Callback';
import {
    CallbackFromJSON,
    CallbackFromJSONTyped,
    CallbackToJSON,
} from './Callback';
import type { CustomScreenInputValue } from './CustomScreenInputValue';
import {
    CustomScreenInputValueFromJSON,
    CustomScreenInputValueFromJSONTyped,
    CustomScreenInputValueToJSON,
} from './CustomScreenInputValue';
import type { CustomScreenOutputLabel } from './CustomScreenOutputLabel';
import {
    CustomScreenOutputLabelFromJSON,
    CustomScreenOutputLabelFromJSONTyped,
    CustomScreenOutputLabelToJSON,
} from './CustomScreenOutputLabel';
import type { Footer } from './Footer';
import {
    FooterFromJSON,
    FooterFromJSONTyped,
    FooterToJSON,
} from './Footer';
import type { NavigationBar } from './NavigationBar';
import {
    NavigationBarFromJSON,
    NavigationBarFromJSONTyped,
    NavigationBarToJSON,
} from './NavigationBar';
import type { RequestPermission } from './RequestPermission';
import {
    RequestPermissionFromJSON,
    RequestPermissionFromJSONTyped,
    RequestPermissionToJSON,
} from './RequestPermission';
import type { ScreenTimer } from './ScreenTimer';
import {
    ScreenTimerFromJSON,
    ScreenTimerFromJSONTyped,
    ScreenTimerToJSON,
} from './ScreenTimer';

/**
 * 
 * @export
 * @interface CustomScreen
 */
export interface CustomScreen {
    /**
     * 
     * @type {NavigationBar}
     * @memberof CustomScreen
     */
    navigationBar: NavigationBar;
    /**
     * 
     * @type {Footer}
     * @memberof CustomScreen
     */
    footer: Footer;
    /**
     * 
     * @type {BasicScreenBlock}
     * @memberof CustomScreen
     */
    styles: BasicScreenBlock;
    /**
     * 
     * @type {RequestPermission}
     * @memberof CustomScreen
     */
    permission: RequestPermission | null;
    /**
     * 
     * @type {ScreenTimer}
     * @memberof CustomScreen
     */
    timer: ScreenTimer | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomScreen
     */
    animationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomScreen
     */
    useLocalAssetsIfAvailable: boolean;
    /**
     * 
     * @type {string}
     * @memberof CustomScreen
     */
    customScreenDescription: string;
    /**
     * Dictionary of output labels for custom screen
     * @type {{ [key: string]: CustomScreenOutputLabel; }}
     * @memberof CustomScreen
     */
    labels: { [key: string]: CustomScreenOutputLabel; };
    /**
     * Dictionary of input values from custom screen
     * @type {{ [key: string]: CustomScreenInputValue; }}
     * @memberof CustomScreen
     */
    values: { [key: string]: CustomScreenInputValue; };
    /**
     * 
     * @type {Callback}
     * @memberof CustomScreen
     */
    callback: Callback;
}

/**
 * Check if a given object implements the CustomScreen interface.
 */
export function instanceOfCustomScreen(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "navigationBar" in value;
    isInstance = isInstance && "footer" in value;
    isInstance = isInstance && "styles" in value;
    isInstance = isInstance && "permission" in value;
    isInstance = isInstance && "timer" in value;
    isInstance = isInstance && "animationEnabled" in value;
    isInstance = isInstance && "useLocalAssetsIfAvailable" in value;
    isInstance = isInstance && "customScreenDescription" in value;
    isInstance = isInstance && "labels" in value;
    isInstance = isInstance && "values" in value;
    isInstance = isInstance && "callback" in value;

    return isInstance;
}

export function CustomScreenFromJSON(json: any): CustomScreen {
    return CustomScreenFromJSONTyped(json, false);
}

export function CustomScreenFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomScreen {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'navigationBar': NavigationBarFromJSON(json['navigationBar']),
        'footer': FooterFromJSON(json['footer']),
        'styles': BasicScreenBlockFromJSON(json['styles']),
        'permission': RequestPermissionFromJSON(json['permission']),
        'timer': ScreenTimerFromJSON(json['timer']),
        'animationEnabled': json['animationEnabled'],
        'useLocalAssetsIfAvailable': json['useLocalAssetsIfAvailable'],
        'customScreenDescription': json['customScreenDescription'],
        'labels': (mapValues(json['labels'], CustomScreenOutputLabelFromJSON)),
        'values': (mapValues(json['values'], CustomScreenInputValueFromJSON)),
        'callback': CallbackFromJSON(json['callback']),
    };
}

export function CustomScreenToJSON(value?: CustomScreen | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'navigationBar': NavigationBarToJSON(value.navigationBar),
        'footer': FooterToJSON(value.footer),
        'styles': BasicScreenBlockToJSON(value.styles),
        'permission': RequestPermissionToJSON(value.permission),
        'timer': ScreenTimerToJSON(value.timer),
        'animationEnabled': value.animationEnabled,
        'useLocalAssetsIfAvailable': value.useLocalAssetsIfAvailable,
        'customScreenDescription': value.customScreenDescription,
        'labels': (mapValues(value.labels, CustomScreenOutputLabelToJSON)),
        'values': (mapValues(value.values, CustomScreenInputValueToJSON)),
        'callback': CallbackToJSON(value.callback),
    };
}

