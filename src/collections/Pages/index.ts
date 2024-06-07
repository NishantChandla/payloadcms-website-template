import { adminsOrUsers } from '@/access/adminsOrUsers';

import {
  CTACenteredBlock,
  CTAWithSplitContentAndButtonBlock,
  CTAWithSplitContentAndImageBlock,
  HomeBlock,
  QuoteBlock,
  StatsBlock,
  Testimonial,
  LogoCloudBlock,
} from '@/app/(payload)/Blocks';

import { CollectionConfig } from 'payload/types';
import { admins } from '@/access/admins';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    create: adminsOrUsers,
    read: adminsOrUsers,
    update: adminsOrUsers,
    delete: admins,
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'layout',
      type: 'blocks',
      admin: {
        initCollapsed: true,
      },
      blocks: [
        HomeBlock,
        QuoteBlock,
        CTACenteredBlock,
        CTAWithSplitContentAndButtonBlock,
        CTAWithSplitContentAndImageBlock,
        StatsBlock,
        Testimonial,
        LogoCloudBlock,
      ],
    },
  ],
};
