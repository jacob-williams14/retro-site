import { sanityClient } from '../api/sanityClient';
import imageUrlBuilder from '@sanity/image-url';
import { Image } from '@/Typings/typings';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: Image) {
  return builder.image(source);
}
