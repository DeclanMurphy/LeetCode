const compactObject = (obj) => {
  if (!obj) {
    return null;
  }
  if (Array.isArray(obj)) {
    return obj.filter(Boolean).map(compactObject);
  }
  if (typeof obj !== 'object') {
    return obj;
  }

  return Object.entries(obj).reduce((compactedObject, [key, value]) => {
    const result = compactObject(value);
    if (result) {
      compactedObject[key] = result;
    }
    return compactedObject;
  }, {});
};
