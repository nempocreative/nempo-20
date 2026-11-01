import frameAsset from '@/assets/nempo-feed-slide-31-frame.png.asset.json';

export function SlideThirtyOneBackground() {
  return (
    <section
      role="group"
      aria-label="Bingkai MusiComedy Night"
      className="absolute inset-0 z-[3] overflow-hidden bg-white"
    >
      <img
        src={frameAsset.url}
        alt="Bingkai MusiComedy Night dengan ilustrasi alat musik tradisional, tanggal 4 November 2026, dan lokasi Good Story Cafe"
        className="absolute inset-0 h-full w-full object-contain"
        loading="eager"
        decoding="async"
      />
    </section>
  );
}
