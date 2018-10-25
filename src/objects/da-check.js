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
 * DACheck
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class DACheck extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      action_uri: 'action_uri',
      description: 'description',
      key: 'key',
      result: 'result',
      title: 'title',
      user_message: 'user_message',
      id: 'id'
    });
  }

  get (fields, params): DACheck {
    return this.read(
      fields,
      params
    );
  }
}
