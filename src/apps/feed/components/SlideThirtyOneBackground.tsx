import frameAsset from '@/assets/nempo-feed-slide-31-gamelan-frame-transparent.png.asset.json';
import logoAsset from '@/assets/musicomedy-night-logo.png.asset.json';
import groupAsset from '@/assets/musicomedy-group.webp.asset.json';
import bgImage from '@/assets/nempo-feed-slide-31-bg.jpg';
import cafeAtmosphere from '@/assets/musicomedy-cafe-atmosphere.jpg';
import cafeBar from '@/assets/musicomedy-cafe-bar.jpg';
import cafeSeating from '@/assets/musicomedy-cafe-seating.jpg';
import cafeTerrace from '@/assets/musicomedy-cafe-terrace.jpg';
import cafeCoffee from '@/assets/musicomedy-cafe-coffee.jpg';
import cafeEntrance from '@/assets/musicomedy-cafe-entrance.jpg';
import cafeStage from '@/assets/musicomedy-cafe-stage.jpg';
import cafeReading from '@/assets/musicomedy-cafe-reading.jpg';
import cafeFriends from '@/assets/musicomedy-cafe-friends.jpg';
import cafeExterior from '@/assets/musicomedy-cafe-exterior.jpg';

const cafeViews = [
  { image: cafeAtmosphere, label: 'Panggung akustik' },
  { image: cafeBar, label: 'Coffee bar' },
  { image: cafeSeating, label: 'Sudut santai' },
  { image: cafeTerrace, label: 'Teras sore' },
  { image: cafeCoffee, label: 'Kopi dan cerita' },
  { image: cafeEntrance, label: 'Selamat datang' },
  { image: cafeStage, label: 'Ruang bermusik' },
  { image: cafeReading, label: 'Sudut membaca' },
  { image: cafeFriends, label: 'Kumpul bareng' },
  { image: cafeExterior, label: 'Suasana senja' },
];

export function SlideThirtyOneBackground({ showTalent = true }: { showTalent?: boolean }) {
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
      {!showTalent && (
        <div className="musicomedy-cafe-scene">
          {cafeViews.map((view, index) => (
            <figure className={`musicomedy-cafe-card musicomedy-cafe-card--${index}`} key={view.label}>
              <img
                src={view.image}
                alt={`Ilustrasi AI ${view.label.toLowerCase()}, bukan foto asli Good Story Cafe`}
                width={1536}
                height={1024}
                loading="eager"
                decoding="async"
                className="musicomedy-cafe-photo"
              />
              <figcaption>{view.label}</figcaption>
            </figure>
          ))}
        </div>
      )}
      {showTalent && <>
      {/* Stage spotlight behind the performers */}
      <div
        aria-hidden="true"
        className="absolute bottom-[7%] left-1/2 h-[62%] w-[80%] -translate-x-1/2"
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
        className="absolute bottom-[10%] left-1/2 h-[62%] -translate-x-1/2"
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
      </>}
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
        className="absolute left-1/2 top-[15%] w-[44%] -translate-x-1/2 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
        loading="eager"
        decoding="async"
      />
    </section>
  );
}
