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
 * AdCreativeLinkDataChildAttachment
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataChildAttachment extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      call_to_action: 'call_to_action',
      caption: 'caption',
      description: 'description',
      image_crops: 'image_crops',
      image_hash: 'image_hash',
      link: 'link',
      name: 'name',
      picture: 'picture',
      place_data: 'place_data',
      referral_id: 'referral_id',
      static_card: 'static_card',
      video_id: 'video_id',
      id: 'id'
    });
  }

  get (fields, params): AdCreativeLinkDataChildAttachment {
    return this.read(
      fields,
      params
    );
  }
}
