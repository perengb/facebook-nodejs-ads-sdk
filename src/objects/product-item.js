/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import ProductSet from './product-set';

/**
 * ProductItem
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class ProductItem extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      additional_image_cdn_urls: 'additional_image_cdn_urls',
      additional_image_urls: 'additional_image_urls',
      additional_variant_attributes: 'additional_variant_attributes',
      age_group: 'age_group',
      applinks: 'applinks',
      availability: 'availability',
      brand: 'brand',
      capability_to_review_status: 'capability_to_review_status',
      category: 'category',
      category_specific_fields: 'category_specific_fields',
      color: 'color',
      commerce_insights: 'commerce_insights',
      condition: 'condition',
      currency: 'currency',
      custom_data: 'custom_data',
      custom_label_0: 'custom_label_0',
      custom_label_1: 'custom_label_1',
      custom_label_2: 'custom_label_2',
      custom_label_3: 'custom_label_3',
      custom_label_4: 'custom_label_4',
      description: 'description',
      expiration_date: 'expiration_date',
      fb_product_category: 'fb_product_category',
      gender: 'gender',
      gtin: 'gtin',
      id: 'id',
      image_cdn_urls: 'image_cdn_urls',
      image_url: 'image_url',
      images: 'images',
      inventory: 'inventory',
      manufacturer_part_number: 'manufacturer_part_number',
      material: 'material',
      mobile_link: 'mobile_link',
      name: 'name',
      ordering_index: 'ordering_index',
      pattern: 'pattern',
      price: 'price',
      product_catalog: 'product_catalog',
      product_feed: 'product_feed',
      product_group: 'product_group',
      product_type: 'product_type',
      retailer_id: 'retailer_id',
      retailer_product_group_id: 'retailer_product_group_id',
      review_rejection_reasons: 'review_rejection_reasons',
      review_status: 'review_status',
      sale_price: 'sale_price',
      sale_price_end_date: 'sale_price_end_date',
      sale_price_start_date: 'sale_price_start_date',
      shipping_weight_unit: 'shipping_weight_unit',
      shipping_weight_value: 'shipping_weight_value',
      short_description: 'short_description',
      size: 'size',
      start_date: 'start_date',
      url: 'url',
      visibility: 'visibility',
    });
  }

  static get AgeGroup (): Object {
    return Object.freeze({
      adult: 'adult',
      all_ages: 'all ages',
      infant: 'infant',
      kids: 'kids',
      newborn: 'newborn',
      teen: 'teen',
      toddler: 'toddler',
    });
  }
  static get Availability (): Object {
    return Object.freeze({
      available_for_order: 'available for order',
      discontinued: 'discontinued',
      in_stock: 'in stock',
      out_of_stock: 'out of stock',
      pending: 'pending',
      preorder: 'preorder',
    });
  }
  static get Condition (): Object {
    return Object.freeze({
      cpo: 'cpo',
      new: 'new',
      open_box_new: 'open_box_new',
      refurbished: 'refurbished',
      used: 'used',
      used_fair: 'used_fair',
      used_good: 'used_good',
      used_like_new: 'used_like_new',
    });
  }
  static get Gender (): Object {
    return Object.freeze({
      female: 'female',
      male: 'male',
      unisex: 'unisex',
    });
  }
  static get ReviewStatus (): Object {
    return Object.freeze({
      approved: 'approved',
      outdated: 'outdated',
      pending: 'pending',
      rejected: 'rejected',
    });
  }
  static get ShippingWeightUnit (): Object {
    return Object.freeze({
      g: 'g',
      kg: 'kg',
      lb: 'lb',
      oz: 'oz',
    });
  }
  static get Visibility (): Object {
    return Object.freeze({
      published: 'published',
      staging: 'staging',
    });
  }
  static get CommerceTaxCategory (): Object {
    return Object.freeze({
      fb_animal: 'FB_ANIMAL',
      fb_animal_supp: 'FB_ANIMAL_SUPP',
      fb_aprl: 'FB_APRL',
      fb_aprl_accessories: 'FB_APRL_ACCESSORIES',
      fb_aprl_athl_unif: 'FB_APRL_ATHL_UNIF',
      fb_aprl_cases: 'FB_APRL_CASES',
      fb_aprl_clothing: 'FB_APRL_CLOTHING',
      fb_aprl_costume: 'FB_APRL_COSTUME',
      fb_aprl_cstm: 'FB_APRL_CSTM',
      fb_aprl_handbag: 'FB_APRL_HANDBAG',
      fb_aprl_jewelry: 'FB_APRL_JEWELRY',
      fb_aprl_shoe: 'FB_APRL_SHOE',
      fb_aprl_shoe_acc: 'FB_APRL_SHOE_ACC',
      fb_aprl_swim: 'FB_APRL_SWIM',
      fb_aprl_swim_chil: 'FB_APRL_SWIM_CHIL',
      fb_aprl_swim_cvr: 'FB_APRL_SWIM_CVR',
      fb_arts: 'FB_ARTS',
      fb_arts_hobby: 'FB_ARTS_HOBBY',
      fb_arts_party: 'FB_ARTS_PARTY',
      fb_arts_party_gift_card: 'FB_ARTS_PARTY_GIFT_CARD',
      fb_arts_ticket: 'FB_ARTS_TICKET',
      fb_baby: 'FB_BABY',
      fb_baby_bath: 'FB_BABY_BATH',
      fb_baby_blanket: 'FB_BABY_BLANKET',
      fb_baby_diaper: 'FB_BABY_DIAPER',
      fb_baby_gift_set: 'FB_BABY_GIFT_SET',
      fb_baby_health: 'FB_BABY_HEALTH',
      fb_baby_nursing: 'FB_BABY_NURSING',
      fb_baby_potty_trn: 'FB_BABY_POTTY_TRN',
      fb_baby_safe: 'FB_BABY_SAFE',
      fb_baby_toys: 'FB_BABY_TOYS',
      fb_baby_transport: 'FB_BABY_TRANSPORT',
      fb_baby_transport_acc: 'FB_BABY_TRANSPORT_ACC',
      fb_bags: 'FB_BAGS',
      fb_bags_bkpk: 'FB_BAGS_BKPK',
      fb_bags_boxes: 'FB_BAGS_BOXES',
      fb_bags_brfcs: 'FB_BAGS_BRFCS',
      fb_bags_csmt_bag: 'FB_BAGS_CSMT_BAG',
      fb_bags_dffl: 'FB_BAGS_DFFL',
      fb_bags_dipr: 'FB_BAGS_DIPR',
      fb_bags_fnny: 'FB_BAGS_FNNY',
      fb_bags_grmt: 'FB_BAGS_GRMT',
      fb_bags_lugg: 'FB_BAGS_LUGG',
      fb_bags_lug_acc: 'FB_BAGS_LUG_ACC',
      fb_bags_msgr: 'FB_BAGS_MSGR',
      fb_bags_tote: 'FB_BAGS_TOTE',
      fb_bags_trn_cas: 'FB_BAGS_TRN_CAS',
      fb_bldg: 'FB_BLDG',
      fb_bldg_acc: 'FB_BLDG_ACC',
      fb_bldg_cnsmb: 'FB_BLDG_CNSMB',
      fb_bldg_fence: 'FB_BLDG_FENCE',
      fb_bldg_fuel_tnk: 'FB_BLDG_FUEL_TNK',
      fb_bldg_ht_vnt: 'FB_BLDG_HT_VNT',
      fb_bldg_lock: 'FB_BLDG_LOCK',
      fb_bldg_matrl: 'FB_BLDG_MATRL',
      fb_bldg_plmb: 'FB_BLDG_PLMB',
      fb_bldg_pump: 'FB_BLDG_PUMP',
      fb_bldg_pwrs: 'FB_BLDG_PWRS',
      fb_bldg_str_tank: 'FB_BLDG_STR_TANK',
      fb_bldg_s_eng: 'FB_BLDG_S_ENG',
      fb_bldg_tl_acc: 'FB_BLDG_TL_ACC',
      fb_bldg_tool: 'FB_BLDG_TOOL',
      fb_busind: 'FB_BUSIND',
      fb_busind_advertising: 'FB_BUSIND_ADVERTISING',
      fb_busind_agriculture: 'FB_BUSIND_AGRICULTURE',
      fb_busind_automation: 'FB_BUSIND_AUTOMATION',
      fb_busind_heavy_mach: 'FB_BUSIND_HEAVY_MACH',
      fb_busind_lab: 'FB_BUSIND_LAB',
      fb_busind_medical: 'FB_BUSIND_MEDICAL',
      fb_busind_retail: 'FB_BUSIND_RETAIL',
      fb_busind_sanitary_ct: 'FB_BUSIND_SANITARY_CT',
      fb_busind_sign: 'FB_BUSIND_SIGN',
      fb_busind_storage: 'FB_BUSIND_STORAGE',
      fb_busind_storage_acc: 'FB_BUSIND_STORAGE_ACC',
      fb_busind_work_gear: 'FB_BUSIND_WORK_GEAR',
      fb_camera_acc: 'FB_CAMERA_ACC',
      fb_camera_camera: 'FB_CAMERA_CAMERA',
      fb_camera_optic: 'FB_CAMERA_OPTIC',
      fb_camera_optics: 'FB_CAMERA_OPTICS',
      fb_camera_photo: 'FB_CAMERA_PHOTO',
      fb_elec: 'FB_ELEC',
      fb_elec_acc: 'FB_ELEC_ACC',
      fb_elec_arcdade: 'FB_ELEC_ARCDADE',
      fb_elec_audio: 'FB_ELEC_AUDIO',
      fb_elec_circuit: 'FB_ELEC_CIRCUIT',
      fb_elec_comm: 'FB_ELEC_COMM',
      fb_elec_computer: 'FB_ELEC_COMPUTER',
      fb_elec_gps_acc: 'FB_ELEC_GPS_ACC',
      fb_elec_gps_nav: 'FB_ELEC_GPS_NAV',
      fb_elec_gps_trk: 'FB_ELEC_GPS_TRK',
      fb_elec_marine: 'FB_ELEC_MARINE',
      fb_elec_network: 'FB_ELEC_NETWORK',
      fb_elec_part: 'FB_ELEC_PART',
      fb_elec_print: 'FB_ELEC_PRINT',
      fb_elec_radar: 'FB_ELEC_RADAR',
      fb_elec_speed_rdr: 'FB_ELEC_SPEED_RDR',
      fb_elec_toll: 'FB_ELEC_TOLL',
      fb_elec_video: 'FB_ELEC_VIDEO',
      fb_elec_vid_gm_acc: 'FB_ELEC_VID_GM_ACC',
      fb_elec_vid_gm_cnsl: 'FB_ELEC_VID_GM_CNSL',
      fb_food: 'FB_FOOD',
      fb_furn: 'FB_FURN',
      fb_furn_baby: 'FB_FURN_BABY',
      fb_furn_bench: 'FB_FURN_BENCH',
      fb_furn_cart: 'FB_FURN_CART',
      fb_furn_chair: 'FB_FURN_CHAIR',
      fb_furn_chair_acc: 'FB_FURN_CHAIR_ACC',
      fb_furn_divide: 'FB_FURN_DIVIDE',
      fb_furn_divide_acc: 'FB_FURN_DIVIDE_ACC',
      fb_furn_ent_ctr: 'FB_FURN_ENT_CTR',
      fb_furn_futn: 'FB_FURN_FUTN',
      fb_furn_futn_pad: 'FB_FURN_FUTN_PAD',
      fb_furn_office: 'FB_FURN_OFFICE',
      fb_furn_office_acc: 'FB_FURN_OFFICE_ACC',
      fb_furn_otto: 'FB_FURN_OTTO',
      fb_furn_outdoor: 'FB_FURN_OUTDOOR',
      fb_furn_outdoor_acc: 'FB_FURN_OUTDOOR_ACC',
      fb_furn_sets: 'FB_FURN_SETS',
      fb_furn_shelve_acc: 'FB_FURN_SHELVE_ACC',
      fb_furn_shlf: 'FB_FURN_SHLF',
      fb_furn_sofa: 'FB_FURN_SOFA',
      fb_furn_sofa_acc: 'FB_FURN_SOFA_ACC',
      fb_furn_storage: 'FB_FURN_STORAGE',
      fb_furn_tabl: 'FB_FURN_TABL',
      fb_furn_tabl_acc: 'FB_FURN_TABL_ACC',
      fb_generic_taxable: 'FB_GENERIC_TAXABLE',
      fb_hlth: 'FB_HLTH',
      fb_hlth_hlth: 'FB_HLTH_HLTH',
      fb_hlth_jwl_cr: 'FB_HLTH_JWL_CR',
      fb_hlth_lilp_blm: 'FB_HLTH_LILP_BLM',
      fb_hlth_ltn_spf: 'FB_HLTH_LTN_SPF',
      fb_hlth_prsl_cr: 'FB_HLTH_PRSL_CR',
      fb_hlth_skn_cr: 'FB_HLTH_SKN_CR',
      fb_hmgn: 'FB_HMGN',
      fb_hmgn_bath: 'FB_HMGN_BATH',
      fb_hmgn_dcor: 'FB_HMGN_DCOR',
      fb_hmgn_emgy: 'FB_HMGN_EMGY',
      fb_hmgn_fplc: 'FB_HMGN_FPLC',
      fb_hmgn_fplc_acc: 'FB_HMGN_FPLC_ACC',
      fb_hmgn_gs_sft: 'FB_HMGN_GS_SFT',
      fb_hmgn_hs_acc: 'FB_HMGN_HS_ACC',
      fb_hmgn_hs_app: 'FB_HMGN_HS_APP',
      fb_hmgn_hs_spl: 'FB_HMGN_HS_SPL',
      fb_hmgn_ktcn: 'FB_HMGN_KTCN',
      fb_hmgn_lawn: 'FB_HMGN_LAWN',
      fb_hmgn_lght: 'FB_HMGN_LGHT',
      fb_hmgn_linn: 'FB_HMGN_LINN',
      fb_hmgn_lt_acc: 'FB_HMGN_LT_ACC',
      fb_hmgn_otdr: 'FB_HMGN_OTDR',
      fb_hmgn_pool: 'FB_HMGN_POOL',
      fb_hmgn_scty: 'FB_HMGN_SCTY',
      fb_hmgn_smk_acc: 'FB_HMGN_SMK_ACC',
      fb_hmgn_umbr: 'FB_HMGN_UMBR',
      fb_hmgn_umbr_acc: 'FB_HMGN_UMBR_ACC',
      fb_mdia: 'FB_MDIA',
      fb_mdia_book: 'FB_MDIA_BOOK',
      fb_mdia_dvds: 'FB_MDIA_DVDS',
      fb_mdia_mag: 'FB_MDIA_MAG',
      fb_mdia_manl: 'FB_MDIA_MANL',
      fb_mdia_musc: 'FB_MDIA_MUSC',
      fb_mdia_prj_pln: 'FB_MDIA_PRJ_PLN',
      fb_mdia_sht_mus: 'FB_MDIA_SHT_MUS',
      fb_offc: 'FB_OFFC',
      fb_offc_bkac: 'FB_OFFC_BKAC',
      fb_offc_crts: 'FB_OFFC_CRTS',
      fb_offc_dskp: 'FB_OFFC_DSKP',
      fb_offc_eqip: 'FB_OFFC_EQIP',
      fb_offc_flng: 'FB_OFFC_FLNG',
      fb_offc_gnrl: 'FB_OFFC_GNRL',
      fb_offc_instm: 'FB_OFFC_INSTM',
      fb_offc_lp_dsk: 'FB_OFFC_LP_DSK',
      fb_offc_mats: 'FB_OFFC_MATS',
      fb_offc_nm_plt: 'FB_OFFC_NM_PLT',
      fb_offc_ppr_hndl: 'FB_OFFC_PPR_HNDL',
      fb_offc_prsnt_spl: 'FB_OFFC_PRSNT_SPL',
      fb_offc_sealr: 'FB_OFFC_SEALR',
      fb_offc_ship_spl: 'FB_OFFC_SHIP_SPL',
      fb_rlgn: 'FB_RLGN',
      fb_rlgn_cmny: 'FB_RLGN_CMNY',
      fb_rlgn_item: 'FB_RLGN_ITEM',
      fb_rlgn_wedd: 'FB_RLGN_WEDD',
      fb_sftwr: 'FB_SFTWR',
      fb_sfwr_cmptr: 'FB_SFWR_CMPTR',
      fb_sfwr_dgtl_gd: 'FB_SFWR_DGTL_GD',
      fb_sfwr_game: 'FB_SFWR_GAME',
      fb_shipping: 'FB_SHIPPING',
      fb_spor: 'FB_SPOR',
      fb_sport_athl: 'FB_SPORT_ATHL',
      fb_sport_athl_clth: 'FB_SPORT_ATHL_CLTH',
      fb_sport_athl_shoe: 'FB_SPORT_ATHL_SHOE',
      fb_sport_athl_sprt: 'FB_SPORT_ATHL_SPRT',
      fb_sport_exrcs: 'FB_SPORT_EXRCS',
      fb_sport_indr_gm: 'FB_SPORT_INDR_GM',
      fb_sport_otdr_gm: 'FB_SPORT_OTDR_GM',
      fb_toys: 'FB_TOYS',
      fb_toys_eqip: 'FB_TOYS_EQIP',
      fb_toys_game: 'FB_TOYS_GAME',
      fb_toys_pzzl: 'FB_TOYS_PZZL',
      fb_toys_tmrs: 'FB_TOYS_TMRS',
      fb_toys_toys: 'FB_TOYS_TOYS',
      fb_vehi: 'FB_VEHI',
      fb_vehi_part: 'FB_VEHI_PART',
    });
  }

  getProductSets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductSet,
      fields,
      params,
      fetchFirstPage,
      '/product_sets'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): ProductItem {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): ProductItem {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
