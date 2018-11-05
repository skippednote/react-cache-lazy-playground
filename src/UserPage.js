import React, { Suspense } from 'react';
import { unstable_createResource } from 'react-cache';
import Loading from './Loading';
import ErrorBoundry from './ErrorBoundry';

const UsersResource = unstable_createResource(() =>
  fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
);

const Users = () => {
  const v = UsersResource.read();
  return v.map(user => <li key={user.id}>{user.name}</li>);
};

const UserPage = () => {
  return (
    <div>
      <h1>Users</h1>
      <ErrorBoundry>
        <Suspense fallback={<Loading />}>
          <Users />
        </Suspense>
      </ErrorBoundry>
    </div>
  );
};

export default UserPage;
