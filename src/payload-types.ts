/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    blog: Blog;
    pages: Page;
    media: Media;
    forms: Form;
    'form-submissions': FormSubmission;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    header: Header;
    footer: Footer;
    settings: Setting;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  roles?: ('admin' | 'user')[] | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blog".
 */
export interface Blog {
  id: string;
  title: string;
  description: string;
  slug: string;
  image?: string | Media | null;
  content?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  author?: string | null;
  author_image?: string | Media | null;
  content_html?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  caption?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  caption_html?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  slug: string;
  title?: string | null;
  layout?:
    | (
        | MediaBlock
        | ContentBlock
        | HeroWithBackgroundBlock
        | HeroWithSplitContentAndImageBlock
        | FeatureWithImageBlock
        | FeatureWithThreeColumnBlock
        | CTACenteredBlock
        | CTAWithSplitContentAndButtonBlock
        | CTAWithSplitContentAndImageBlock
        | StatsBlock
        | IncentiveBlock
        | TestimonialBlock
        | LogoCloudBlock
        | FormBlock
        | BannerBlock
        | BlogsBlock
        | FAQ
        | CardBlock
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "MediaBlock".
 */
export interface MediaBlock {
  position?: ('default' | 'fullscreen') | null;
  media: string | Media;
  id?: string | null;
  blockName?: string | null;
  blockType: 'media-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ContentBlock".
 */
export interface ContentBlock {
  alignment?: ('left' | 'right' | 'center') | null;
  columns?:
    | {
        size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
        richText?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        richText_html?: string | null;
        enableLink?: boolean | null;
        links?:
          | {
              link: {
                type?: ('reference' | 'custom') | null;
                newTab?: boolean | null;
                reference?: {
                  relationTo: 'pages';
                  value: string | Page;
                } | null;
                url?: string | null;
                label: string;
                appearance?: ('primary' | 'secondary') | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'content-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroWithBackgroundBlock".
 */
export interface HeroWithBackgroundBlock {
  size?: ('oneThird' | 'half' | 'twoThirds' | 'full') | null;
  alignment?: ('left' | 'right' | 'center') | null;
  heroContent?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  backgroundType?: ('backgroundImage' | 'backgroundColor') | null;
  backgroundImage?: string | Media | null;
  backgroundColor?: string | null;
  textColor: string;
  heroContent_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero-with-background-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroWithSplitContentAndImageBlock".
 */
export interface HeroWithSplitContentAndImageBlock {
  alignment?: ('leftToRight' | 'rightToLeft' | 'topToBottom' | 'bottomToTop') | null;
  heroContent: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  showImage?: boolean | null;
  image?: string | Media | null;
  heroContent_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero-with-split-content-and-image-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FeatureWithImageBlock".
 */
export interface FeatureWithImageBlock {
  alignment?: ('leftToRight' | 'rightToLeft') | null;
  sectionTitleAndDescription?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  section_title_and_description_html?: string | null;
  features?:
    | {
        icon?: string | null;
        featureContent?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        feature_content_html?: string | null;
        id?: string | null;
      }[]
    | null;
  showImage?: boolean | null;
  image?: string | Media | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'feature-with-image-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FeatureWithThreeColumnBlock".
 */
export interface FeatureWithThreeColumnBlock {
  sectionTitleAndDescription?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  section_title_and_description_html?: string | null;
  features?:
    | {
        icon?: string | null;
        featureContent?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        feature_content_html?: string | null;
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'feature-with-three-column-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTACenteredBlock".
 */
export interface CTACenteredBlock {
  sectionTitleAndDescription: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  backgroundColor: string;
  textColor: string;
  sectionTitleAndDescription_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'cta-centered-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTAWithSplitContentAndButtonBlock".
 */
export interface CTAWithSplitContentAndButtonBlock {
  sectionTitleAndDescription: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  backgroundColor: string;
  textColor: string;
  sectionTitleAndDescription_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'cta-with-split-content-and-button-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CTAWithSplitContentAndImageBlock".
 */
export interface CTAWithSplitContentAndImageBlock {
  sectionTitleAndDescription: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  backgroundColor: string;
  textColor: string;
  image: string | Media;
  sectionTitleAndDescription_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'cta-with-split-content-and-image-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "StatsBlock".
 */
export interface StatsBlock {
  sectionTitleAndDescription: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  yourMetrics: {
    metric: string;
    value: string;
    id?: string | null;
  }[];
  sectionTitleAndDescription_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'stats-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "IncentiveBlock".
 */
export interface IncentiveBlock {
  title: string;
  description: string;
  image: string | Media;
  features?:
    | {
        icon?: string | null;
        title: string;
        description: string;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'incentive-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TestimonialBlock".
 */
export interface TestimonialBlock {
  title: string;
  reviews: {
    rating?: number | null;
    heading: string;
    text: string;
    customerName?: string | null;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'testimonial-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LogoCloudBlock".
 */
export interface LogoCloudBlock {
  sectionTitleAndDescription?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  section_title_and_description_html?: string | null;
  logos: {
    storeLogo: string | Media;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'logo-cloud-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FormBlock".
 */
export interface FormBlock {
  form: string | Form;
  enableIntro?: boolean | null;
  introContent: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  intro_content_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'form-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "forms".
 */
export interface Form {
  id: string;
  title: string;
  fields?:
    | (
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            defaultValue?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'checkbox';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'country';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'email';
          }
        | {
            message?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'message';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: number | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'number';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            options?:
              | {
                  label: string;
                  value: string;
                  id?: string | null;
                }[]
              | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'select';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'text';
          }
        | {
            name: string;
            label?: string | null;
            width?: number | null;
            defaultValue?: string | null;
            required?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'textarea';
          }
      )[]
    | null;
  submitButtonLabel?: string | null;
  confirmationType?: ('message' | 'redirect') | null;
  confirmationMessage?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  redirect?: {
    url: string;
  };
  emails?:
    | {
        emailTo?: string | null;
        cc?: string | null;
        bcc?: string | null;
        replyTo?: string | null;
        emailFrom?: string | null;
        subject: string;
        message?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BannerBlock".
 */
export interface BannerBlock {
  sectionTitleAndDescription?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  sectionTitleAndDescription_html?: string | null;
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'banner-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BlogsBlock".
 */
export interface BlogsBlock {
  titleAndDescription?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  blogs: {
    blog?: {
      relationTo: 'blog';
      value: string | Blog;
    } | null;
    id?: string | null;
  }[];
  titleAndDescription_html?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'blogs-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "FAQ".
 */
export interface FAQ {
  FAQ: {
    Question: string;
    Answer: string;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'faq-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CardBlock".
 */
export interface CardBlock {
  titleAndDescription?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  titleAndDescription_html?: string | null;
  cards: {
    title: string;
    description: string;
    image: string | Media;
    id?: string | null;
  }[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'card-block';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-submissions".
 */
export interface FormSubmission {
  id: string;
  form: string | Form;
  submissionData?:
    | {
        field: string;
        value: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "header".
 */
export interface Header {
  id: string;
  showStoreLogo?: boolean | null;
  logo?: string | Media | null;
  storeName: string;
  navLinks: {
    title: string;
    reference?: {
      relationTo: 'pages';
      value: string | Page;
    } | null;
    id?: string | null;
  }[];
  links?:
    | {
        link: {
          type?: ('reference' | 'custom') | null;
          newTab?: boolean | null;
          reference?: {
            relationTo: 'pages';
            value: string | Page;
          } | null;
          url?: string | null;
          label: string;
          appearance?: ('primary' | 'secondary') | null;
        };
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  logo?: string | Media | null;
  socialProfiles?: {
    facebook?: string | null;
    twitter?: string | null;
    instagram?: string | null;
    youtube?: string | null;
    email?: string | null;
    phone?: string | null;
  };
  footerLinks: {
    title: string;
    links?:
      | {
          link: {
            type?: ('reference' | 'custom') | null;
            newTab?: boolean | null;
            reference?: {
              relationTo: 'pages';
              value: string | Page;
            } | null;
            url?: string | null;
            label: string;
          };
          id?: string | null;
        }[]
      | null;
    id?: string | null;
  }[];
  copyright: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: string;
  homePage?: {
    relationTo: 'pages';
    value: string | Page;
  } | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
