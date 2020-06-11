const rules = [{
  test: (note) => {
    return !(note.title.length > 20);
  },
  error: 'Title length must not exceed 20 symbols!'
}, {
  test: (note) => {
    return note.title || note.description;
  },
  error: 'At least title or description must be provided'
}];

const validate = (note) => {
  for (let rule of rules) {
    if (!rule.test(note)) {
      return {
        success: false,
        error: rule.error
      };
    }
  }
  return {
    success: true,
    error: null
  };
}

export { validate };