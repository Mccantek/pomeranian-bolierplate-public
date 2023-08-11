import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataExercisesNumberIf } from './Excercise-number-if/router-data';
import { blockRouterMetaData as blockRouterMetaDataExercisesJSNumbers } from './JSNumbersTraining/router-data';
import { blockRouterMetaData as blockRouterMetaDataJSexercise } from './Exercise-JSFunctions/router-data';
import { blockRouterMetaData as emptyValuesandComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as JSArraysBasics } from './JSArrayBasics/router-data';
import { blockRouterMetaData as Time } from './Time/router-data';
import { blockRouterMetaData as Time2 } from './Time2/router-data';
import {SubRouteExampleMetaData as HitTheMole} from './HitTheMoleGame/router-data'
import { blockRouterMetaData as ExerciseStorage } from './Exercise-js-local-storage/router-data';
import { blockRouterMetaData as SavedInput } from './Exercise-js-saved-input/router-data';
import { blockRouterMetaData as TryAndCatch } from './TryCatchAndFinally/router-data';
import { blockRouterMetaData as ExerciseTryCatch } from './ExerciseTryCatch/router-data';
import { blockRouterMetaData as Prototypes } from './Prototypess/router-data';
import { blockRouterMetaData as JsThis } from './jsThis/router-data';
import { blockRouterMetaData as Fetch } from './WillSee/router-data';
import { blockRouterMetaData as Promisess } from './PromiseMethodsTraining/router-data';
import { blockRouterMetaData as ToDo } from './ToDoList/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataJSexercise,
  emptyValuesandComments,
  JSArraysBasics,
  Time,
  Time2,
  HitTheMole,
  ExerciseStorage,
  SavedInput,
  TryAndCatch,
  ExerciseTryCatch,
  Prototypes,
  JsThis,
  Fetch,
  Promisess,
  ToDo,
  blockRouterMetaDataExercisesNumberIf,
  blockRouterMetaDataExercisesJSNumbers,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
