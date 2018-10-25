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
 * LiveVideoError
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class LiveVideoError extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      creation_time: 'creation_time',
      error_code: 'error_code',
      error_message: 'error_message',
      error_type: 'error_type',
      id: 'id'
    });
  }

  get (fields, params): LiveVideoError {
    return this.read(
      fields,
      params
    );
  }
}
