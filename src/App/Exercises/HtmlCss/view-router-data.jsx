import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { CSSboxModelRouterMetaData } from './Example-box-model/router-data';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { GoogleFontMeta } from './GoogleFonts/router-data';
import { SelectorsAndCascadeMetaData } from './SelectorsAndCascade/router-data';
import { TablesMetaData } from './Tables/router-data';
import { TextFundamentsMetaData } from './TextFundaments/router-data';
import { Tables2MetaData } from './Tables2/router-data';
import { FigmaFloatRouterMetaData } from './FloatsAndPositioning/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  SelectorsAndCascadeMetaData,
  TextFundamentsMetaData,
  GoogleFontMeta,
  TablesMetaData,
  Tables2MetaData,
  FigmaFloatRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
