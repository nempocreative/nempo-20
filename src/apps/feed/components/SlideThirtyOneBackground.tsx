import frameAsset from '@/assets/nempo-feed-slide-31-gamelan-frame-transparent.png.asset.json';
import logoAsset from '@/assets/musicomedy-night-logo.png.asset.json';
import bgImage from '@/assets/nempo-feed-slide-31-bg.jpg';

export function SlideThirtyOneBackground() {
  return (
    <section
      role="group"
      aria-label="Bingkai MusiComedy Night"
      className="absolute inset-0 z-[3] overflow-hidden"
    >
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
      <img
        src={frameAsset.url}
        alt="Bingkai MusiComedy Night dengan ilustrasi alat musik tradisional, tanggal 4 November 2026, dan lokasi Good Story Cafe"
        className="absolute inset-0 h-full w-full object-fill"
        loading="eager"
        decoding="async"
      />
      <img
        src={logoAsset.url}
        alt="MusiComedy Night"
        className="absolute left-1/2 top-[7%] w-[78%] -translate-x-1/2 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
        loading="eager"
        decoding="async"
      />
    </section>
  );
}
