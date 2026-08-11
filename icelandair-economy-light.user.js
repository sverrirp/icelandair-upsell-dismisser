// ==UserScript==
// @name         Icelandair Economy Light auto-confirm
// @namespace    icelandair-light
// @version      3.1
// @description  Auto-checks "Ég skil..." and clicks "Halda áfram með Economy Light" in the upgrade modal
// @match        https://booking.icelandair.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // debug beacon: green = script running, flips text when it acts
  const badge = document.createElement('div');
  badge.textContent = 'EL auto: on';
  badge.style.cssText = 'position:fixed;bottom:8px;left:8px;z-index:2147483647;background:#0a7d33;color:#fff;font:12px sans-serif;padding:4px 8px;border-radius:4px;opacity:.85;pointer-events:none;';
  (document.body || document.documentElement).appendChild(badge);

  // ponytail: 400ms poll instead of MutationObserver — a one-shot click can fire
  // before the React checkbox is interactive; polling retries until the modal closes
  setInterval(() => {
    // stable test hook on the "Halda áfram með Economy Light" button
    const btn = document.querySelector('[data-cy="upsell-current-button"]')
      || [...document.querySelectorAll('button')].find(b => b.textContent.includes('Halda áfram með Economy Light'));
    if (!btn) return;

    const dialog = btn.closest('[role="dialog"]') || document;

    // the "Ég skil..." checkbox is a <button role="checkbox">, not an <input>
    const cb = dialog.querySelector('[role="checkbox"][aria-checked="false"], input[type="checkbox"]:not(:checked)');
    if (cb) {
      badge.textContent = 'EL auto: ticking checkbox';
      cb.click();
      return; // next tick clicks the button once aria-disabled clears
    }

    // button is gated with aria-disabled, not the disabled property
    if (btn.getAttribute('aria-disabled') !== 'true' && !btn.disabled) {
      badge.textContent = 'EL auto: confirming';
      btn.click(); // modal closes on success, which stops further clicks
    } else {
      badge.textContent = 'EL auto: waiting for button to enable';
    }
  }, 400);
})();
