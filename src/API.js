/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateElementInput = {|
  id?: ?string,
  air: boolean,
  fire: boolean,
  water: boolean,
  earth: boolean,
  owner?: ?string,
  _version?: ?number,
|};

export type ModelElementConditionInput = {|
  air?: ?ModelBooleanInput,
  fire?: ?ModelBooleanInput,
  water?: ?ModelBooleanInput,
  earth?: ?ModelBooleanInput,
  and?: ?Array< ?ModelElementConditionInput >,
  or?: ?Array< ?ModelElementConditionInput >,
  not?: ?ModelElementConditionInput,
|};

export type ModelBooleanInput = {|
  ne?: ?boolean,
  eq?: ?boolean,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type UpdateElementInput = {|
  id: string,
  air?: ?boolean,
  fire?: ?boolean,
  water?: ?boolean,
  earth?: ?boolean,
  owner?: ?string,
  _version?: ?number,
|};

export type DeleteElementInput = {|
  id?: ?string,
  _version?: ?number,
|};

export type CreatePlaylistInput = {|
  id?: ?string,
  url: string,
  title: string,
  artist: string,
  artwork: string,
  duration?: ?number,
  owner?: ?string,
  _version?: ?number,
|};

export type ModelPlaylistConditionInput = {|
  url?: ?ModelStringInput,
  title?: ?ModelStringInput,
  artist?: ?ModelStringInput,
  artwork?: ?ModelStringInput,
  duration?: ?ModelIntInput,
  and?: ?Array< ?ModelPlaylistConditionInput >,
  or?: ?Array< ?ModelPlaylistConditionInput >,
  not?: ?ModelPlaylistConditionInput,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type ModelIntInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
|};

export type UpdatePlaylistInput = {|
  id: string,
  url?: ?string,
  title?: ?string,
  artist?: ?string,
  artwork?: ?string,
  duration?: ?number,
  owner?: ?string,
  _version?: ?number,
|};

export type DeletePlaylistInput = {|
  id?: ?string,
  _version?: ?number,
|};

export type CreateRadioInput = {|
  id?: ?string,
  artist: string,
  album: string,
  title: string,
  cover: string,
  uri: string,
  owner?: ?string,
  _version?: ?number,
|};

export type ModelRadioConditionInput = {|
  artist?: ?ModelStringInput,
  album?: ?ModelStringInput,
  title?: ?ModelStringInput,
  cover?: ?ModelStringInput,
  uri?: ?ModelStringInput,
  and?: ?Array< ?ModelRadioConditionInput >,
  or?: ?Array< ?ModelRadioConditionInput >,
  not?: ?ModelRadioConditionInput,
|};

export type UpdateRadioInput = {|
  id: string,
  artist?: ?string,
  album?: ?string,
  title?: ?string,
  cover?: ?string,
  uri?: ?string,
  owner?: ?string,
  _version?: ?number,
|};

export type DeleteRadioInput = {|
  id?: ?string,
  _version?: ?number,
|};

export type CreateImageInput = {|
  id?: ?string,
  title: string,
  uri: string,
  owner?: ?string,
  _version?: ?number,
|};

export type ModelImageConditionInput = {|
  title?: ?ModelStringInput,
  uri?: ?ModelStringInput,
  and?: ?Array< ?ModelImageConditionInput >,
  or?: ?Array< ?ModelImageConditionInput >,
  not?: ?ModelImageConditionInput,
|};

export type UpdateImageInput = {|
  id: string,
  title?: ?string,
  uri?: ?string,
  owner?: ?string,
  _version?: ?number,
|};

export type DeleteImageInput = {|
  id?: ?string,
  _version?: ?number,
|};

export type CreateGalleryInput = {|
  id?: ?string,
  uri: string,
  owner?: ?string,
  _version?: ?number,
|};

export type ModelGalleryConditionInput = {|
  uri?: ?ModelStringInput,
  and?: ?Array< ?ModelGalleryConditionInput >,
  or?: ?Array< ?ModelGalleryConditionInput >,
  not?: ?ModelGalleryConditionInput,
|};

export type UpdateGalleryInput = {|
  id: string,
  uri?: ?string,
  owner?: ?string,
  _version?: ?number,
|};

export type DeleteGalleryInput = {|
  id?: ?string,
  _version?: ?number,
|};

export type ModelElementFilterInput = {|
  id?: ?ModelIDInput,
  air?: ?ModelBooleanInput,
  fire?: ?ModelBooleanInput,
  water?: ?ModelBooleanInput,
  earth?: ?ModelBooleanInput,
  owner?: ?ModelStringInput,
  and?: ?Array< ?ModelElementFilterInput >,
  or?: ?Array< ?ModelElementFilterInput >,
  not?: ?ModelElementFilterInput,
|};

export type ModelIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelPlaylistFilterInput = {|
  id?: ?ModelIDInput,
  url?: ?ModelStringInput,
  title?: ?ModelStringInput,
  artist?: ?ModelStringInput,
  artwork?: ?ModelStringInput,
  duration?: ?ModelIntInput,
  owner?: ?ModelStringInput,
  and?: ?Array< ?ModelPlaylistFilterInput >,
  or?: ?Array< ?ModelPlaylistFilterInput >,
  not?: ?ModelPlaylistFilterInput,
|};

export type ModelRadioFilterInput = {|
  id?: ?ModelIDInput,
  artist?: ?ModelStringInput,
  album?: ?ModelStringInput,
  title?: ?ModelStringInput,
  cover?: ?ModelStringInput,
  uri?: ?ModelStringInput,
  owner?: ?ModelStringInput,
  and?: ?Array< ?ModelRadioFilterInput >,
  or?: ?Array< ?ModelRadioFilterInput >,
  not?: ?ModelRadioFilterInput,
|};

export type ModelImageFilterInput = {|
  id?: ?ModelIDInput,
  title?: ?ModelStringInput,
  uri?: ?ModelStringInput,
  owner?: ?ModelStringInput,
  and?: ?Array< ?ModelImageFilterInput >,
  or?: ?Array< ?ModelImageFilterInput >,
  not?: ?ModelImageFilterInput,
|};

export type ModelGalleryFilterInput = {|
  id?: ?ModelIDInput,
  uri?: ?ModelStringInput,
  owner?: ?ModelStringInput,
  and?: ?Array< ?ModelGalleryFilterInput >,
  or?: ?Array< ?ModelGalleryFilterInput >,
  not?: ?ModelGalleryFilterInput,
|};

export type CreateElementMutationVariables = {|
  input: CreateElementInput,
  condition?: ?ModelElementConditionInput,
|};

export type CreateElementMutation = {|
  createElement: ? {|
    __typename: "Element",
    id: string,
    air: boolean,
    fire: boolean,
    water: boolean,
    earth: boolean,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateElementMutationVariables = {|
  input: UpdateElementInput,
  condition?: ?ModelElementConditionInput,
|};

export type UpdateElementMutation = {|
  updateElement: ? {|
    __typename: "Element",
    id: string,
    air: boolean,
    fire: boolean,
    water: boolean,
    earth: boolean,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteElementMutationVariables = {|
  input: DeleteElementInput,
  condition?: ?ModelElementConditionInput,
|};

export type DeleteElementMutation = {|
  deleteElement: ? {|
    __typename: "Element",
    id: string,
    air: boolean,
    fire: boolean,
    water: boolean,
    earth: boolean,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreatePlaylistMutationVariables = {|
  input: CreatePlaylistInput,
  condition?: ?ModelPlaylistConditionInput,
|};

export type CreatePlaylistMutation = {|
  createPlaylist: ? {|
    __typename: "Playlist",
    id: string,
    url: string,
    title: string,
    artist: string,
    artwork: string,
    duration: ?number,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdatePlaylistMutationVariables = {|
  input: UpdatePlaylistInput,
  condition?: ?ModelPlaylistConditionInput,
|};

export type UpdatePlaylistMutation = {|
  updatePlaylist: ? {|
    __typename: "Playlist",
    id: string,
    url: string,
    title: string,
    artist: string,
    artwork: string,
    duration: ?number,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeletePlaylistMutationVariables = {|
  input: DeletePlaylistInput,
  condition?: ?ModelPlaylistConditionInput,
|};

export type DeletePlaylistMutation = {|
  deletePlaylist: ? {|
    __typename: "Playlist",
    id: string,
    url: string,
    title: string,
    artist: string,
    artwork: string,
    duration: ?number,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateRadioMutationVariables = {|
  input: CreateRadioInput,
  condition?: ?ModelRadioConditionInput,
|};

export type CreateRadioMutation = {|
  createRadio: ? {|
    __typename: "Radio",
    id: string,
    artist: string,
    album: string,
    title: string,
    cover: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateRadioMutationVariables = {|
  input: UpdateRadioInput,
  condition?: ?ModelRadioConditionInput,
|};

export type UpdateRadioMutation = {|
  updateRadio: ? {|
    __typename: "Radio",
    id: string,
    artist: string,
    album: string,
    title: string,
    cover: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteRadioMutationVariables = {|
  input: DeleteRadioInput,
  condition?: ?ModelRadioConditionInput,
|};

export type DeleteRadioMutation = {|
  deleteRadio: ? {|
    __typename: "Radio",
    id: string,
    artist: string,
    album: string,
    title: string,
    cover: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateImageMutationVariables = {|
  input: CreateImageInput,
  condition?: ?ModelImageConditionInput,
|};

export type CreateImageMutation = {|
  createImage: ? {|
    __typename: "Image",
    id: string,
    title: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateImageMutationVariables = {|
  input: UpdateImageInput,
  condition?: ?ModelImageConditionInput,
|};

export type UpdateImageMutation = {|
  updateImage: ? {|
    __typename: "Image",
    id: string,
    title: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteImageMutationVariables = {|
  input: DeleteImageInput,
  condition?: ?ModelImageConditionInput,
|};

export type DeleteImageMutation = {|
  deleteImage: ? {|
    __typename: "Image",
    id: string,
    title: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type CreateGalleryMutationVariables = {|
  input: CreateGalleryInput,
  condition?: ?ModelGalleryConditionInput,
|};

export type CreateGalleryMutation = {|
  createGallery: ? {|
    __typename: "Gallery",
    id: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateGalleryMutationVariables = {|
  input: UpdateGalleryInput,
  condition?: ?ModelGalleryConditionInput,
|};

export type UpdateGalleryMutation = {|
  updateGallery: ? {|
    __typename: "Gallery",
    id: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteGalleryMutationVariables = {|
  input: DeleteGalleryInput,
  condition?: ?ModelGalleryConditionInput,
|};

export type DeleteGalleryMutation = {|
  deleteGallery: ? {|
    __typename: "Gallery",
    id: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type SyncElementsQueryVariables = {|
  filter?: ?ModelElementFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  lastSync?: ?number,
|};

export type SyncElementsQuery = {|
  syncElements: ? {|
    __typename: "ModelElementConnection",
    items: ? Array<? {|
      __typename: "Element",
      id: string,
      air: boolean,
      fire: boolean,
      water: boolean,
      earth: boolean,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type GetElementQueryVariables = {|
  id: string,
|};

export type GetElementQuery = {|
  getElement: ? {|
    __typename: "Element",
    id: string,
    air: boolean,
    fire: boolean,
    water: boolean,
    earth: boolean,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListElementsQueryVariables = {|
  filter?: ?ModelElementFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListElementsQuery = {|
  listElements: ? {|
    __typename: "ModelElementConnection",
    items: ? Array<? {|
      __typename: "Element",
      id: string,
      air: boolean,
      fire: boolean,
      water: boolean,
      earth: boolean,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type SyncPlaylistsQueryVariables = {|
  filter?: ?ModelPlaylistFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  lastSync?: ?number,
|};

export type SyncPlaylistsQuery = {|
  syncPlaylists: ? {|
    __typename: "ModelPlaylistConnection",
    items: ? Array<? {|
      __typename: "Playlist",
      id: string,
      url: string,
      title: string,
      artist: string,
      artwork: string,
      duration: ?number,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type GetPlaylistQueryVariables = {|
  id: string,
|};

export type GetPlaylistQuery = {|
  getPlaylist: ? {|
    __typename: "Playlist",
    id: string,
    url: string,
    title: string,
    artist: string,
    artwork: string,
    duration: ?number,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListPlaylistsQueryVariables = {|
  filter?: ?ModelPlaylistFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListPlaylistsQuery = {|
  listPlaylists: ? {|
    __typename: "ModelPlaylistConnection",
    items: ? Array<? {|
      __typename: "Playlist",
      id: string,
      url: string,
      title: string,
      artist: string,
      artwork: string,
      duration: ?number,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type SyncRadiosQueryVariables = {|
  filter?: ?ModelRadioFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  lastSync?: ?number,
|};

export type SyncRadiosQuery = {|
  syncRadios: ? {|
    __typename: "ModelRadioConnection",
    items: ? Array<? {|
      __typename: "Radio",
      id: string,
      artist: string,
      album: string,
      title: string,
      cover: string,
      uri: string,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type GetRadioQueryVariables = {|
  id: string,
|};

export type GetRadioQuery = {|
  getRadio: ? {|
    __typename: "Radio",
    id: string,
    artist: string,
    album: string,
    title: string,
    cover: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListRadiosQueryVariables = {|
  filter?: ?ModelRadioFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListRadiosQuery = {|
  listRadios: ? {|
    __typename: "ModelRadioConnection",
    items: ? Array<? {|
      __typename: "Radio",
      id: string,
      artist: string,
      album: string,
      title: string,
      cover: string,
      uri: string,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type SyncImagesQueryVariables = {|
  filter?: ?ModelImageFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  lastSync?: ?number,
|};

export type SyncImagesQuery = {|
  syncImages: ? {|
    __typename: "ModelImageConnection",
    items: ? Array<? {|
      __typename: "Image",
      id: string,
      title: string,
      uri: string,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type GetImageQueryVariables = {|
  id: string,
|};

export type GetImageQuery = {|
  getImage: ? {|
    __typename: "Image",
    id: string,
    title: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListImagesQueryVariables = {|
  filter?: ?ModelImageFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListImagesQuery = {|
  listImages: ? {|
    __typename: "ModelImageConnection",
    items: ? Array<? {|
      __typename: "Image",
      id: string,
      title: string,
      uri: string,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type SyncGalleriesQueryVariables = {|
  filter?: ?ModelGalleryFilterInput,
  limit?: ?number,
  nextToken?: ?string,
  lastSync?: ?number,
|};

export type SyncGalleriesQuery = {|
  syncGalleries: ? {|
    __typename: "ModelGalleryConnection",
    items: ? Array<? {|
      __typename: "Gallery",
      id: string,
      uri: string,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type GetGalleryQueryVariables = {|
  id: string,
|};

export type GetGalleryQuery = {|
  getGallery: ? {|
    __typename: "Gallery",
    id: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListGallerysQueryVariables = {|
  filter?: ?ModelGalleryFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListGallerysQuery = {|
  listGallerys: ? {|
    __typename: "ModelGalleryConnection",
    items: ? Array<? {|
      __typename: "Gallery",
      id: string,
      uri: string,
      owner: ?string,
      _version: number,
      _deleted: ?boolean,
      _lastChangedAt: number,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
    startedAt: ?number,
  |},
|};

export type OnCreateElementSubscription = {|
  onCreateElement: ? {|
    __typename: "Element",
    id: string,
    air: boolean,
    fire: boolean,
    water: boolean,
    earth: boolean,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateElementSubscription = {|
  onUpdateElement: ? {|
    __typename: "Element",
    id: string,
    air: boolean,
    fire: boolean,
    water: boolean,
    earth: boolean,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteElementSubscription = {|
  onDeleteElement: ? {|
    __typename: "Element",
    id: string,
    air: boolean,
    fire: boolean,
    water: boolean,
    earth: boolean,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreatePlaylistSubscription = {|
  onCreatePlaylist: ? {|
    __typename: "Playlist",
    id: string,
    url: string,
    title: string,
    artist: string,
    artwork: string,
    duration: ?number,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdatePlaylistSubscription = {|
  onUpdatePlaylist: ? {|
    __typename: "Playlist",
    id: string,
    url: string,
    title: string,
    artist: string,
    artwork: string,
    duration: ?number,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeletePlaylistSubscription = {|
  onDeletePlaylist: ? {|
    __typename: "Playlist",
    id: string,
    url: string,
    title: string,
    artist: string,
    artwork: string,
    duration: ?number,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateRadioSubscription = {|
  onCreateRadio: ? {|
    __typename: "Radio",
    id: string,
    artist: string,
    album: string,
    title: string,
    cover: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateRadioSubscription = {|
  onUpdateRadio: ? {|
    __typename: "Radio",
    id: string,
    artist: string,
    album: string,
    title: string,
    cover: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteRadioSubscription = {|
  onDeleteRadio: ? {|
    __typename: "Radio",
    id: string,
    artist: string,
    album: string,
    title: string,
    cover: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateImageSubscription = {|
  onCreateImage: ? {|
    __typename: "Image",
    id: string,
    title: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateImageSubscription = {|
  onUpdateImage: ? {|
    __typename: "Image",
    id: string,
    title: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteImageSubscription = {|
  onDeleteImage: ? {|
    __typename: "Image",
    id: string,
    title: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnCreateGallerySubscription = {|
  onCreateGallery: ? {|
    __typename: "Gallery",
    id: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateGallerySubscription = {|
  onUpdateGallery: ? {|
    __typename: "Gallery",
    id: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteGallerySubscription = {|
  onDeleteGallery: ? {|
    __typename: "Gallery",
    id: string,
    uri: string,
    owner: ?string,
    _version: number,
    _deleted: ?boolean,
    _lastChangedAt: number,
    createdAt: any,
    updatedAt: any,
  |},
|};