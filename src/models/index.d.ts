import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Element {
  readonly id: string;
  readonly air: boolean;
  readonly fire: boolean;
  readonly water: boolean;
  readonly earth: boolean;
  readonly owner?: string;
  constructor(init: ModelInit<Element>);
  static copyOf(source: Element, mutator: (draft: MutableModel<Element>) => MutableModel<Element> | void): Element;
}

export declare class Playlist {
  readonly id: string;
  readonly url: string;
  readonly title: string;
  readonly artist: string;
  readonly artwork: string;
  readonly duration?: number;
  readonly owner?: string;
  constructor(init: ModelInit<Playlist>);
  static copyOf(source: Playlist, mutator: (draft: MutableModel<Playlist>) => MutableModel<Playlist> | void): Playlist;
}

export declare class Radio {
  readonly id: string;
  readonly artist: string;
  readonly album: string;
  readonly title: string;
  readonly cover: string;
  readonly uri: string;
  readonly owner?: string;
  constructor(init: ModelInit<Radio>);
  static copyOf(source: Radio, mutator: (draft: MutableModel<Radio>) => MutableModel<Radio> | void): Radio;
}

export declare class Image {
  readonly id: string;
  readonly title: string;
  readonly uri: string;
  readonly owner?: string;
  constructor(init: ModelInit<Image>);
  static copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

export declare class Gallery {
  readonly id: string;
  readonly uri: string;
  readonly owner?: string;
  constructor(init: ModelInit<Gallery>);
  static copyOf(source: Gallery, mutator: (draft: MutableModel<Gallery>) => MutableModel<Gallery> | void): Gallery;
}