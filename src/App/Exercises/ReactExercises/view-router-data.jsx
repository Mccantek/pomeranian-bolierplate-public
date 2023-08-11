import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { SubRouteMetaData as mui_metadata } from './MaterialUIBasicElements/router-data';
import { SubRouteExampleMetaData as Swagger } from './Swagger/router-data';
import { ReactRouterEventsMetaData as useRef } from './ReactUseRef/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  ReactRouterEventsMetaData,
  Block09MetaData,
  mui_metadata,
  Swagger,
  useRef,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
