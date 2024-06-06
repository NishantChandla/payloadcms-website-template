import type { Block } from 'payload/types';
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical';
import { IconSelector } from '@/common/components/IconSelector';
import link from '@/app/(payload)/fields/link';

export const FeatureWithThreeColumnBlock: Block = {
  slug: 'feature-with-three-column-block',
  interfaceName: 'FeatureWithThreeColumnBlock',
  imageAltText: 'Feature With Three Column Block',
  labels: {
    singular: 'Feature With Three Column',
    plural: 'Feature With Three Column',
  },
  fields: [
    {
      name: 'sectionTitleAndDescription',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('sectionTitleAndDescription', { name: 'section_title_and_description_html' }),
    {
      name: 'features',
      type: 'array',
      fields: [
        {
          type: 'text',
          name: 'icon',
          admin: {
            components: {
              Field: IconSelector,
            },
          },
        },
        {
          name: 'featureContent',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
          }),
        },
        lexicalHTML('featureContent', { name: 'feature_content_html' }),
        link({
          appearances: false,
        }),
      ],
    },
  ],
};
