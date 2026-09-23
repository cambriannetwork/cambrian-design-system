'use client';
import { useState } from 'react';

/**
 * A 36px square with a picture, or the first two letters of the label when
 * there is no picture or it fails to load. It is decorative: put the name in
 * text next to it.
 */
export function Avatar({ label, src }: { label: string; src?: string | null }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed)
    return (
      <span className="cds-avatar" aria-hidden="true">
        {label.slice(0, 2).toUpperCase()}
      </span>
    );
  return (
    // A plain img: the picture host is the app's choice, not known at build time.
    <img
      className="cds-avatar cds-avatar--image"
      src={src}
      alt=""
      width={36}
      height={36}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
