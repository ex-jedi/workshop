// *==============================================================================
// ** Imports  **
// *==============================================================================

// *==============================================================================
// ** Imported  **
// *==============================================================================

function scrollFunction() {
  const elementScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPos = (elementScroll / windowHeight) * 100;
  document.getElementById('progBar').style.width = `${scrollPos}%`;
}

window.onscroll = function () {
  scrollFunction();
};
