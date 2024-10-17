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
/**
 * 
 * @export
 * @interface MeetingChangeResource
 */
export interface MeetingChangeResource {
    /**
     * Human-readable date and time.
     * @type {string}
     * @memberof MeetingChangeResource
     */
    dateString?: string;
    /**
     * Name of the user who made the change.
     * @type {string}
     * @memberof MeetingChangeResource
     */
    userName?: string;
    /**
     * Name of the service body related to the meeting.
     * @type {string}
     * @memberof MeetingChangeResource
     */
    serviceBodyName?: string;
    /**
     * List of details about the changes.
     * @type {Array<string>}
     * @memberof MeetingChangeResource
     */
    details?: Array<string>;
}

/**
 * Check if a given object implements the MeetingChangeResource interface.
 */
export function instanceOfMeetingChangeResource(value: object): value is MeetingChangeResource {
    return true;
}

export function MeetingChangeResourceFromJSON(json: any): MeetingChangeResource {
    return MeetingChangeResourceFromJSONTyped(json, false);
}

export function MeetingChangeResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeetingChangeResource {
    if (json == null) {
        return json;
    }
    return {
        
        'dateString': json['dateString'] == null ? undefined : json['dateString'],
        'userName': json['userName'] == null ? undefined : json['userName'],
        'serviceBodyName': json['serviceBodyName'] == null ? undefined : json['serviceBodyName'],
        'details': json['details'] == null ? undefined : json['details'],
    };
}

  export function MeetingChangeResourceToJSON(json: any): MeetingChangeResource {
      return MeetingChangeResourceToJSONTyped(json, false);
  }

  export function MeetingChangeResourceToJSONTyped(value?: MeetingChangeResource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dateString': value['dateString'],
        'userName': value['userName'],
        'serviceBodyName': value['serviceBodyName'],
        'details': value['details'],
    };
}
