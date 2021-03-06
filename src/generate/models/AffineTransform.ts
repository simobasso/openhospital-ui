// tslint:disable
/**
 * Api Documentation
 * Api Documentation
 *
 * The version of the OpenAPI document: 1.0
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
 * @interface AffineTransform
 */
export interface AffineTransform {
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    determinant?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AffineTransform
     */
    identity?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    scaleX?: number;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    scaleY?: number;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    shearX?: number;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    shearY?: number;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    toQuadrantRotation?: number;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    toRotation?: number;
    /**
     * 
     * @type {AffineTransform}
     * @memberof AffineTransform
     */
    transform?: AffineTransform;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    translateX?: number;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    translateY?: number;
    /**
     * 
     * @type {number}
     * @memberof AffineTransform
     */
    type?: number;
}

export function AffineTransformFromJSON(json: any): AffineTransform {
    return {
        'determinant': !exists(json, 'determinant') ? undefined : json['determinant'],
        'identity': !exists(json, 'identity') ? undefined : json['identity'],
        'scaleX': !exists(json, 'scaleX') ? undefined : json['scaleX'],
        'scaleY': !exists(json, 'scaleY') ? undefined : json['scaleY'],
        'shearX': !exists(json, 'shearX') ? undefined : json['shearX'],
        'shearY': !exists(json, 'shearY') ? undefined : json['shearY'],
        'toQuadrantRotation': !exists(json, 'toQuadrantRotation') ? undefined : json['toQuadrantRotation'],
        'toRotation': !exists(json, 'toRotation') ? undefined : json['toRotation'],
        'transform': !exists(json, 'transform') ? undefined : AffineTransformFromJSON(json['transform']),
        'translateX': !exists(json, 'translateX') ? undefined : json['translateX'],
        'translateY': !exists(json, 'translateY') ? undefined : json['translateY'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function AffineTransformToJSON(value?: AffineTransform): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'determinant': value.determinant,
        'identity': value.identity,
        'scaleX': value.scaleX,
        'scaleY': value.scaleY,
        'shearX': value.shearX,
        'shearY': value.shearY,
        'toQuadrantRotation': value.toQuadrantRotation,
        'toRotation': value.toRotation,
        'transform': AffineTransformToJSON(value.transform),
        'translateX': value.translateX,
        'translateY': value.translateY,
        'type': value.type,
    };
}


