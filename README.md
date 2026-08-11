# Icelandair upsell dismisser

A Tampermonkey userscript that automatically dismisses the fare upgrade
modals on `booking.icelandair.com` — both the Economy Light → Economy
Standard and the Economy Standard → Saga Premium upsell. It checks the
"Ég skil…" confirmation box and clicks the "Halda áfram" (continue with
current fare) button for you.

A small green badge ("EL auto: on") appears in the bottom-left corner of the
page when the script is running.

## Installation

### 1. Install Tampermonkey

Install the Tampermonkey extension for your browser:

- **Chrome / Edge / Brave:** [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox:** [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/tampermonkey/)
- **Safari:** [App Store](https://apps.apple.com/app/tampermonkey/id1482490089)

### 2. Enable "Allow User Scripts" (Chrome / Edge / Brave)

Chromium-based browsers require this setting, otherwise Tampermonkey cannot
run any scripts:

1. Open `chrome://extensions` (or `edge://extensions`).
2. Find **Tampermonkey** and click **Details**.
3. Turn on **Allow User Scripts**.

> On older Chrome versions this toggle is called **Developer mode** and sits
> in the top-right corner of the `chrome://extensions` page — enable that
> instead.

Firefox and Safari don't need this step.

### 3. Install the script

1. Click the Tampermonkey icon in your browser toolbar and choose
   **Create a new script…** (or open the Tampermonkey **Dashboard** → **+** tab).
2. Delete the template code in the editor.
3. Copy the entire contents of
   [`icelandair-upsell-dismisser.user.js`](./icelandair-upsell-dismisser.user.js)
   and paste it into the editor.
4. Save with **File → Save** (or `Cmd/Ctrl+S`).

### 4. Verify it works

1. Go to a booking flow on `https://booking.icelandair.com/`.
2. You should see a green **EL auto: on** badge in the bottom-left corner.
3. When an upgrade modal appears (Economy Light → Economy Standard or
   Economy Standard → Saga Premium), the script checks the confirmation box
   and clicks the continue button automatically.

## Disabling

Click the Tampermonkey icon and toggle the script off, or remove it from the
Tampermonkey Dashboard.
