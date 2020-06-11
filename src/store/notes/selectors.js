export const notesSelector = (notes, filters) => {
  if (!filters.text) { 
    return notes; 
  }

  const matchString = filters.text.toLowerCase();
  return notes.filter(note => {
    const isTitleMatch = note.title.toLowerCase().includes(matchString);
    const isDescriptionMatch = note.description.toLowerCase().includes(matchString);
    return isTitleMatch || isDescriptionMatch;
  });
}