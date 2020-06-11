export const resizeTextarea = (elem, minHeight) => {
  elem.style.height = 'auto';
  elem.style.height = `${Math.max(elem.scrollHeight, minHeight)}px`;
}