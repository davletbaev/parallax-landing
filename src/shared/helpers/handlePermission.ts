function handlePermission(permission: PermissionName) {
  if (!navigator.permissions) return Promise.resolve();

  return navigator.permissions.query({ name: permission })
    .then((result) => {
      if (result.state === 'granted') {
        return Promise.resolve();
      }

      if (result.state === 'prompt') {
        return Promise.resolve();
      }

      if (result.state === 'denied') {
        return Promise.reject();
      }
    });
}

export default handlePermission;