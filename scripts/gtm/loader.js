/**
 * This function loads the Google Tag Manager (GTM) script and its noscript.
 * The GTM script is inserted into the head section of the document,
 * and the noscript version is appended to the body.
 * @param {string} gtmId - The Google Tag Manager container ID.
 * @returns {void} The function does not return any value.
 * @example
 * loadGTMScript('GTM-XXXXXX');
 */
function loadGTMScript(gtmId) {
  const script = document.createRange().createContextualFragment(`
    <!-- Google Tag Manager -->
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');</script>
    <!-- End Google Tag Manager -->`);
  document.head.prepend(script);
  const noscriptFragment = document.createRange().createContextualFragment(`
    <!-- Google Tag Manager (noscript) -->
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    `);
  document.body.append(noscriptFragment);
}

export default loadGTMScript;
