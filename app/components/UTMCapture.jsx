'use client';
/**
 * UTMCapture — runs on every page load.
 *
 * Reads Google Ads campaign parameters from the URL and persists them
 * in sessionStorage so they survive navigation to /contact.
 *
 * Keys captured:
 *   gclid        — Google Click ID (auto-tagged by Google Ads)
 *   utm_source   — e.g. "google"
 *   utm_medium   — e.g. "cpc"
 *   utm_campaign — e.g. "hvac-calgary-furnace-repair"
 *   utm_term     — e.g. "furnace repair calgary"
 *   utm_content  — e.g. "ad-variant-a"
 *
 * The contact form reads these back via getStoredUTMs().
 *
 * Storage strategy:
 *   • First-touch wins: once UTMs are saved for a session they are not
 *     overwritten — so if a visitor clicks an ad, browses, then clicks an
 *     organic link before converting, the paid click still gets credit.
 *   • sessionStorage (not localStorage): clears when the browser tab closes,
 *     so a new session always starts fresh.
 */

import { useEffect } from 'react';

const UTM_KEYS = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const STORAGE_KEY = 'p26_utm';

export function getStoredUTMs() {
  if (typeof window === 'undefined') return {};
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

export default function UTMCapture() {
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const found = {};
      UTM_KEYS.forEach((key) => {
        const val = params.get(key);
        if (val) found[key] = val;
      });

      // Only write if we found at least one UTM/GCLID and nothing is stored yet.
      // First-touch attribution: don't overwrite an existing paid session.
      if (Object.keys(found).length > 0) {
        const existing = sessionStorage.getItem(STORAGE_KEY);
        if (!existing) {
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
        }
      }
    } catch {
      // sessionStorage blocked (private mode edge case) — fail silently.
    }
  }, []);

  return null; // renders nothing
}
