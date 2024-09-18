import type { Schema, Attribute } from '@strapi/strapi';

export interface MenusSubMenus extends Schema.Component {
  collectionName: 'components_menus_sub_menus';
  info: {
    displayName: 'SubMenus';
    icon: 'apps';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menus.sub-menus': MenusSubMenus;
    }
  }
}
