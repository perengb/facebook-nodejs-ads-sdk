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
 * Canvas
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Canvas extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      background_color: 'background_color',
      body_elements: 'body_elements',
      canvas_link: 'canvas_link',
      id: 'id',
      is_hidden: 'is_hidden',
      is_published: 'is_published',
      last_editor: 'last_editor',
      name: 'name',
      owner: 'owner',
      update_time: 'update_time',
    });
  }


  
  get (fields: Array<string>, params: Object = {}): Canvas {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Canvas {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
