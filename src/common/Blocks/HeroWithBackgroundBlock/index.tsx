import Link from 'next/link';
import type { HeroWithBackgroundBlock as HeroWithBackgroundBlockType } from '@/payload-types';
import { MediaImage } from '@/common/MediaImage';

export const HeroWithBackgroundBlock = ({
  data,
}: {
  data: HeroWithBackgroundBlockType | null | undefined;
}) => {
  if (!data) return null;

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 text-wrap rounded-lg">
      <div
        className={`relative flex flex-col 
        ${data.alignment === 'left' ? 'items-start' : ''}
        ${data.alignment === 'center' ? 'items-center' : ''}
        ${data.alignment === 'right' ? 'items-end' : ''}
         gap-10 px-10 py-16 `}
        style={
          data.backgroundType === 'backgroundColor'
            ? { backgroundColor: data.backgroundColor || '#FFFFFF' }
            : undefined
        }
      >
        <div
          className={`flex-1 z-10 md:py-10 
          ${data.size === 'oneThird' ? 'w-1/3' : ''}
          ${data.size === 'twoThirds' ? 'w-2/3' : ''}
          ${data.size === 'half' ? 'w-1/2' : ''}
          ${data.size === 'full' ? 'w-full' : ''}
          ${data.alignment === 'left' ? 'text-left' : ''}
          ${data.alignment === 'center' ? 'text-center' : ''}
          ${data.alignment === 'right' ? 'text-right' : ''}`}
          style={data.textColor ? { color: data.textColor || '#000000' } : undefined}
        >
          <div className="prose xl:prose-xl">
            {data.heroContent_html && (
              <div dangerouslySetInnerHTML={{ __html: data.heroContent_html }} />
            )}
          </div>

          <div className="mt-6">
            {data.links?.map(({ link }, index) => (
              <Link
                href={link.url ? link.url : ''}
                key={index}
                className={`mr-2 mt-2 inline-block rounded border border-indigo-600 ${
                  link.appearance === 'primary' && 'bg-indigo-600'
                } px-12 py-3 text-sm font-medium ${
                  link.appearance === 'primary' ? 'text-white' : 'text-indigo-600'
                } transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        {data.backgroundType === 'backgroundImage' && data.backgroundImage && (
          <>
            <MediaImage
              media={data.backgroundImage}
              className="absolute inset-0 h-full w-full object-cover rounded-lg"
            />
          </>
        )}
        {data.backgroundType === 'backgroundImage' && (
          <div className="absolute inset-0 bg-transparent bg-gradient-to-r from-black/50 to-black/10"></div>
        )}
      </div>
    </section>
  );
};
