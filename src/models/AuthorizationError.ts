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
 * @interface AuthorizationError
 */
export interface AuthorizationError {
    /**
     * 
     * @type {string}
     * @memberof AuthorizationError
     */
    message: string;
}

/**
 * Check if a given object implements the AuthorizationError interface.
 */
export function instanceOfAuthorizationError(value: object): value is AuthorizationError {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function AuthorizationErrorFromJSON(json: any): AuthorizationError {
    return AuthorizationErrorFromJSONTyped(json, false);
}

export function AuthorizationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationError {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function AuthorizationErrorToJSON(value?: AuthorizationError | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'message': value['message'],
    };
}

