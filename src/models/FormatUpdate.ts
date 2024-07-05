/* tslint:disable */
/* eslint-disable */
/**
 * BMLT
 * BMLT Admin API Documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { FormatTranslation } from './FormatTranslation';
import {
    FormatTranslationFromJSON,
    FormatTranslationFromJSONTyped,
    FormatTranslationToJSON,
} from './FormatTranslation';

/**
 * 
 * @export
 * @interface FormatUpdate
 */
export interface FormatUpdate {
    /**
     * 
     * @type {string}
     * @memberof FormatUpdate
     */
    worldId?: string;
    /**
     * 
     * @type {string}
     * @memberof FormatUpdate
     */
    type?: string;
    /**
     * 
     * @type {Array<FormatTranslation>}
     * @memberof FormatUpdate
     */
    translations: Array<FormatTranslation>;
}

/**
 * Check if a given object implements the FormatUpdate interface.
 */
export function instanceOfFormatUpdate(value: object): value is FormatUpdate {
    if (!('translations' in value) || value['translations'] === undefined) return false;
    return true;
}

export function FormatUpdateFromJSON(json: any): FormatUpdate {
    return FormatUpdateFromJSONTyped(json, false);
}

export function FormatUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatUpdate {
    if (json == null) {
        return json;
    }
    return {
        
        'worldId': json['worldId'] == null ? undefined : json['worldId'],
        'type': json['type'] == null ? undefined : json['type'],
        'translations': ((json['translations'] as Array<any>).map(FormatTranslationFromJSON)),
    };
}

export function FormatUpdateToJSON(value?: FormatUpdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'worldId': value['worldId'],
        'type': value['type'],
        'translations': ((value['translations'] as Array<any>).map(FormatTranslationToJSON)),
    };
}

