'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

export type ProjectGalleryItem = {
  image: string;
  alt: string;
  title: string;
  description: string;
  tech: string[];
};

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
};

export default function ProjectGallery({ items }: ProjectGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(items.length > 2);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem = selectedIndex === null ? null : items[selectedIndex] ?? null;

  const updateScrollButtons = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 1);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  }, []);

  const showAdjacentImage = useCallback((direction: 'left' | 'right') => {
    if (items.length < 2) return;

    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;

      const offset = direction === 'left' ? -1 : 1;
      return (currentIndex + offset + items.length) % items.length;
    });
  }, [items.length]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollButtons();
    container.addEventListener('scroll', updateScrollButtons, { passive: true });
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [updateScrollButtons]);

  useEffect(() => {
    if (!selectedItem) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      }

      if (event.key === 'ArrowLeft') {
        showAdjacentImage('left');
      }

      if (event.key === 'ArrowRight') {
        showAdjacentImage('right');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem, showAdjacentImage]);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const imageWidth = container.querySelector<HTMLElement>('[data-gallery-image]')?.offsetWidth ?? 288;
    const gap = 12;
    const scrollAmount = imageWidth + gap;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  if (items.length === 0) return null;

  return (
    <div className="mt-8">
      <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">
        Gallery
      </h4>

      <div className="relative">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`hidden lg:flex absolute -left-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border items-center justify-center transition-opacity cursor-pointer ${
              canScrollLeft ? 'opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll gallery left"
          >
            <FaChevronLeft className="text-gray-700 dark:text-gray-200" size={12} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto overflow-y-visible scroll-smooth pt-2 pb-4 -mt-2 pr-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {items.map((item, index) => (
              <button
                key={`${item.title}-${item.image}-${index}`}
                type="button"
                data-gallery-image
                onClick={() => setSelectedIndex(index)}
                className="group relative min-w-full w-full flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:bg-dark-card dark:shadow-black/30 sm:min-w-[calc(70%-0.375rem)] sm:w-[calc(70%-0.375rem)] lg:min-w-[calc(58%-0.375rem)] lg:w-[calc(58%-0.375rem)] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-video h-full w-full bg-gray-50 object-contain dark:bg-dark-bg"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`hidden lg:flex absolute -right-10 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border items-center justify-center transition-opacity cursor-pointer ${
              canScrollRight ? 'opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll gallery right"
          >
            <FaChevronRight className="text-gray-700 dark:text-gray-200" size={12} />
          </button>

          <div className="flex lg:hidden justify-center gap-4 mt-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-9 h-9 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border flex items-center justify-center transition-opacity cursor-pointer ${
                canScrollLeft ? 'opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border' : 'opacity-30 pointer-events-none'
              }`}
              aria-label="Scroll gallery left"
            >
              <FaChevronLeft className="text-gray-700 dark:text-gray-200" size={12} />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-9 h-9 rounded-full bg-white dark:bg-dark-card shadow-lg border border-gray-200 dark:border-dark-border flex items-center justify-center transition-opacity cursor-pointer ${
                canScrollRight ? 'opacity-100 hover:bg-gray-100 dark:hover:bg-dark-border' : 'opacity-30 pointer-events-none'
              }`}
              aria-label="Scroll gallery right"
            >
              <FaChevronRight className="text-gray-700 dark:text-gray-200" size={12} />
            </button>
          </div>
        </div>

      {typeof document !== 'undefined' && selectedItem && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/80 px-4 py-8 backdrop-blur-sm"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedItem.title} screenshot`}
        >
          <div
            className="relative max-h-full w-full max-w-4xl overflow-y-auto rounded-xl border border-gray-200 bg-white p-5 pt-14 shadow-2xl dark:border-dark-border dark:bg-dark-card md:p-7 md:pt-16"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-gray-200 hover:text-gray-950 dark:bg-dark-border dark:text-gray-300 dark:hover:text-gray-100 cursor-pointer"
              aria-label="Close gallery image"
            >
              <FaTimes size={14} />
            </button>

            <div className="relative">
              <button
                type="button"
                onClick={() => showAdjacentImage('left')}
                className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-lg transition-colors hover:bg-white hover:text-gray-950 dark:border-dark-border dark:bg-dark-card/90 dark:text-gray-200 dark:hover:bg-dark-card cursor-pointer"
                aria-label="Show previous gallery image"
              >
                <FaChevronLeft size={14} />
              </button>

              <img
                src={selectedItem.image}
                alt={selectedItem.alt}
                className="max-h-[72vh] w-full rounded-lg object-contain"
              />

              <button
                type="button"
                onClick={() => showAdjacentImage('right')}
                className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-700 shadow-lg transition-colors hover:bg-white hover:text-gray-950 dark:border-dark-border dark:bg-dark-card/90 dark:text-gray-200 dark:hover:bg-dark-card cursor-pointer"
                aria-label="Show next gallery image"
              >
                <FaChevronRight size={14} />
              </button>
            </div>

            <h3 className="mt-4 pr-12 text-xl font-semibold text-gray-950 dark:text-gray-100">
              {selectedItem.title}
            </h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedItem.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100/80 dark:bg-blue-400/10 px-2.5 py-0.5 text-[10px] font-medium text-blue-800 dark:text-blue-300 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              {selectedItem.description}
            </p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
