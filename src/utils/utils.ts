export const getScrollPage = (x = 0, y = 0) => (
  window.scrollTo({
    top: x,
    left: y,
  })
);

export const getFormatPrice = (
  function() {
    const r = /(\d{3})/g;
    return function(text: string) {
      return text.split('').reverse().join('').replace(r, '$1 ').split('').reverse().join('');
    };
  }
)();
