import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';
import { Documents } from '../../api/documents/documents.js';

const users = [{
  email: 'admin@admin.com',
  password: 'password',
  profile: {
    name: { first: 'Carl', last: 'Winslow' },
  },
  roles: ['admin'],
}];

users.forEach(({ email, password, profile, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile });
    Roles.addUsersToRoles(userId, roles);
  }
});

const documents = [
  { title: 'Document #1', order: 0 },
  { title: 'Document #2', order: 1 },
  { title: 'Document #3', order: 2 },
  { title: 'Document #4', order: 3 },
  { title: 'Document #5', order: 4 },
  { title: 'Document #6', order: 5 },
  { title: 'Document #7', order: 6 },
];

documents.forEach((doc) => {
  const docExists = Documents.findOne({ title: doc.title });

  if (!docExists) {
    Documents.insert(doc);
  }
});
