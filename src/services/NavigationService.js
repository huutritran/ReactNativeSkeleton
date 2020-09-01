import React from 'react';

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

export function navigate(routeName, params) {
  navigationRef.current?.navigate(routeName, params);
}

export function navigateAndReset(routeName, params) {
  const newRoutes = {index: 0, routes: [{routeName, params}]};
  navigationRef.current?.reset(newRoutes);
}
