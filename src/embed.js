/* InstantILL Widget: Retired as of 18th November 2025
   This script stays online with a notice so embedded pages don’t break.
   This is only for the InstantILL embed. 
*/

this.instantill = function (opts) {
  opts = opts || {};

  var learnUrl = "https://blog.oa.works/sunsetting-the-open-access-button-instantill/"
               + "?utm_source=instantill&utm_medium=widget&utm_campaign=shutdown_notice"
               + "&utm_content=" + encodeURIComponent(location.hostname || '');

  var message = ''
    + '<div role="status" aria-live="polite"'
    + '     style="margin:8px 0; padding:12px 14px;'
    + '            border:1px solid #e5e7eb; background:#fff; color:#111827;'
    + '            border-radius:4px; font:16px/1.5 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;'
    + '            max-width:640px;">'
    + '  <span style="display:block;margin:0 0 4px 0;"><strong>This search tool is no longer available.</strong></span>'
    + '  <span style="display:block;margin:0;">Please contact your library or this site’s administrator. '
    + '    <a href="' + learnUrl + '" target="_blank" rel="noopener"'
    + '       style="text-decoration:underline;">Learn more</a>.'
    + '  </span>'
    + '</div>';

  var selector = opts.element || '#instantill';
  var mount = document.querySelector(selector);
  if (!mount) {
    mount = document.createElement('div');
    mount.id = (selector && selector[0] === '#') ? selector.slice(1) : 'instantill';
    document.body.appendChild(mount);
  }
  mount.innerHTML = message;

  // Return a harmless object so callers that store the return value don't error.
  return { retired: true };
};