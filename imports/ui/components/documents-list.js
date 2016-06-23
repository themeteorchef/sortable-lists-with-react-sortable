import React from 'react';
import Sortable from 'react-sortablejs';
import { Alert } from 'react-bootstrap';
import { Document } from './document.js';
import { updateDocument } from '../../api/documents/methods.js';

const updateDocumentOrder = (items) => {
  items.forEach((_id, order) => {
    updateDocument.call({ _id, update: { order } });
  });
};

export const DocumentsList = ({ documents }) => (
  documents.length > 0 ? <Sortable
    className="documents-list list-group"
    onChange={ updateDocumentOrder }
  >
    {documents.map((doc) => (
      <Document key={ doc._id } document={ doc } />
    ))}
  </Sortable> :
  <Alert bsStyle="warning">No documents yet.</Alert>
);

DocumentsList.propTypes = {
  documents: React.PropTypes.array,
};
