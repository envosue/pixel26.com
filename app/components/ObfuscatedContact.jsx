'use client';
import { useEffect, useState } from 'react';

// Renders an email or phone link whose value is assembled in the browser
// after mount — so the server-rendered HTML never contains a complete,
// scrapable address for harvester bots.
export default function ObfuscatedContact({ kind, className }) {
  const [val, setVal] = useState(null);

  useEffect(() => {
    if (kind === 'email') {
      const addr = 'hello' + String.fromCharCode(64) + 'pixel26' + '.' + 'com';
      setVal({ href: 'mailto:' + addr, label: addr });
    } else {
      const tel = '+1' + '647' + '862' + '2923';
      setVal({ href: 'tel:' + tel, label: '+1 (647) 862-2923' });
    }
  }, [kind]);

  if (!val) {
    return <span className={className} aria-hidden="true">{kind === 'email' ? 'Loading…' : '—'}</span>;
  }
  return <a href={val.href} className={className}>{val.label}</a>;
}
