/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdCreativeLinkDataAppLinkSpec
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataAppLinkSpec extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      android: 'android',
      ios: 'ios',
      ipad: 'ipad',
      iphone: 'iphone',
      id: 'id'
    });
  }

  get (fields, params): AdCreativeLinkDataAppLinkSpec {
    return this.read(
      fields,
      params
    );
  }
}
