import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as emptyValuesandComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JSArraysBasics } from './JSArrayBasics/router-data';
import { blockRouterMetaData as Time } from './Time/router-data';
import { blockRouterMetaData as Time2 } from './Time2/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  emptyValuesandComments,
  JSArraysBasics,
  Time,
  Time2,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
