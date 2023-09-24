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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RootServerBaseStatisticsServiceBodies
 */
export interface RootServerBaseStatisticsServiceBodies {
    /**
     * 
     * @type {number}
     * @memberof RootServerBaseStatisticsServiceBodies
     */
    numZones: number;
    /**
     * 
     * @type {number}
     * @memberof RootServerBaseStatisticsServiceBodies
     */
    numRegions: number;
    /**
     * 
     * @type {number}
     * @memberof RootServerBaseStatisticsServiceBodies
     */
    numAreas: number;
    /**
     * 
     * @type {number}
     * @memberof RootServerBaseStatisticsServiceBodies
     */
    numGroups: number;
}

/**
 * Check if a given object implements the RootServerBaseStatisticsServiceBodies interface.
 */
export function instanceOfRootServerBaseStatisticsServiceBodies(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "numZones" in value;
    isInstance = isInstance && "numRegions" in value;
    isInstance = isInstance && "numAreas" in value;
    isInstance = isInstance && "numGroups" in value;

    return isInstance;
}

export function RootServerBaseStatisticsServiceBodiesFromJSON(json: any): RootServerBaseStatisticsServiceBodies {
    return RootServerBaseStatisticsServiceBodiesFromJSONTyped(json, false);
}

export function RootServerBaseStatisticsServiceBodiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): RootServerBaseStatisticsServiceBodies {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'numZones': json['numZones'],
        'numRegions': json['numRegions'],
        'numAreas': json['numAreas'],
        'numGroups': json['numGroups'],
    };
}

export function RootServerBaseStatisticsServiceBodiesToJSON(value?: RootServerBaseStatisticsServiceBodies | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'numZones': value.numZones,
        'numRegions': value.numRegions,
        'numAreas': value.numAreas,
        'numGroups': value.numGroups,
    };
}

