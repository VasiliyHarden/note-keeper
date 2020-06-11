export default (function() {

  let isFreezed = false;
  const bodyElem = document.querySelector('body');

  return {
    freeze: () => {
      if (!isFreezed) {
        isFreezed = true;
        bodyElem.classList.add('freezed');
      } 
    },
    defreeze: () => {
      if (isFreezed) {
        isFreezed = false;
        bodyElem.classList.remove('freezed');
      }
    }
  }
})();