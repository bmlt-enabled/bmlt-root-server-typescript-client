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
    FormatTranslationToJSONTyped,
} from './FormatTranslation';

/**
 * 
 * @export
 * @interface FormatBase
 */
export interface FormatBase {
    /**
     * 
     * @type {string}
     * @memberof FormatBase
     */
    worldId?: string;
    /**
     * 
     * @type {string}
     * @memberof FormatBase
     */
    type?: string;
    /**
     * 
     * @type {Array<FormatTranslation>}
     * @memberof FormatBase
     */
    translations?: Array<FormatTranslation>;
}

/**
 * Check if a given object implements the FormatBase interface.
 */
export function instanceOfFormatBase(value: object): value is FormatBase {
    return true;
}

export function FormatBaseFromJSON(json: any): FormatBase {
    return FormatBaseFromJSONTyped(json, false);
}

export function FormatBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FormatBase {
    if (json == null) {
        return json;
    }
    return {
        
        'worldId': json['worldId'] == null ? undefined : json['worldId'],
        'type': json['type'] == null ? undefined : json['type'],
        'translations': json['translations'] == null ? undefined : ((json['translations'] as Array<any>).map(FormatTranslationFromJSON)),
    };
}

  export function FormatBaseToJSON(json: any): FormatBase {
      return FormatBaseToJSONTyped(json, false);
  }

  export function FormatBaseToJSONTyped(value?: FormatBase | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'worldId': value['worldId'],
        'type': value['type'],
        'translations': value['translations'] == null ? undefined : ((value['translations'] as Array<any>).map(FormatTranslationToJSON)),
    };
}

