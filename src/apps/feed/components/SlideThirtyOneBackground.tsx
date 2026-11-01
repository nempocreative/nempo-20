import frameAsset from '@/assets/nempo-feed-slide-31-gamelan-frame-transparent.png.asset.json';
import logoAsset from '@/assets/musicomedy-night-logo.png.asset.json';
import groupAsset from '@/assets/musicomedy-group.webp.asset.json';
import gscLogoAsset from '@/assets/good-story-cafe-logo.jpg.asset.json';
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
      {/* Stage spotlight behind the performers */}
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] left-1/2 h-[62%] w-[80%] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(ellipse 50% 55% at 50% 45%, rgba(255,214,140,0.55), rgba(255,160,70,0.18) 55%, transparent 75%)',
          filter: 'blur(6px)',
        }}
      />
      {/* Floor contact shadow */}
      <div
        aria-hidden="true"
        className="absolute bottom-[11.5%] left-1/2 h-[4%] w-[62%] -translate-x-1/2 rounded-[50%]"
        style={{ background: 'radial-gradient(ellipse at center, rgba(40,8,0,0.65), transparent 70%)', filter: 'blur(4px)' }}
      />
      <div
        className="absolute bottom-[13%] left-1/2 h-[54%] -translate-x-1/2"
        style={{ aspectRatio: '1068 / 1529' }}
      >
        <img
          src={groupAsset.url}
          alt="Para pengisi acara MusiComedy Night berbusana adat Sunda"
          className="absolute inset-0 h-full w-full object-contain"
          style={{
            filter:
              'sepia(0.18) saturate(1.12) contrast(1.05) brightness(0.97) drop-shadow(0 0 2px rgba(255,200,120,0.9)) drop-shadow(0 0 14px rgba(255,170,80,0.45)) drop-shadow(0 14px 18px rgba(30,5,0,0.45))',
          }}
          loading="eager"
          decoding="async"
        />
        {/* Warm stage light graded onto the photo only */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,200,120,0.45) 0%, rgba(255,140,60,0.2) 45%, rgba(120,20,10,0.45) 100%)',
            mixBlendMode: 'soft-light',
            WebkitMaskImage: `url(${groupAsset.url})`,
            maskImage: `url(${groupAsset.url})`,
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
          }}
        />
        {/* Feet fade into the stage glow */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[8%]"
          style={{ background: 'linear-gradient(0deg, rgba(200,90,30,0.35), transparent)', filter: 'blur(3px)' }}
        />
      </div>
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
        className="absolute left-1/2 top-[19%] w-[44%] -translate-x-1/2 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
        loading="eager"
        decoding="async"
      />
    </section>
  );
}
