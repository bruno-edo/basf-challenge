import sagas from './sagas';
import DocumentScreen from './screen';

import documentReducer, { Creators as DocumentsActionCreators } from './reducer';

export default DocumentScreen;

export { DocumentsActionCreators, sagas, documentReducer };