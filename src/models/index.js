// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Element, Playlist, Radio, Image, Gallery, Background } = initSchema(schema);

export {
  Element,
  Playlist,
  Radio,
  Image,
  Gallery,
  Background
};