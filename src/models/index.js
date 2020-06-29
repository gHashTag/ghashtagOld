// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Element, Playlist, Image, Gallery } = initSchema(schema);

export {
  Element,
  Playlist,
  Image,
  Gallery
};