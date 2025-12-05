import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export function ProjectGallerySection() {
  const galleryImages = ['gallery1', 'gallery2', 'gallery3', 'gallery4'].map(getImage).filter(Boolean);

  return (
    <section id="gallery" className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl">
            Project Gallery
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A visual showcase of my work.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image) => (
            image && (
              <div key={image.id} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <p className="text-white text-lg font-bold">{image.description}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
