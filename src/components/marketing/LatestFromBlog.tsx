'use client';

import { GlobeIcon } from '@phosphor-icons/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { BLOG_DOMAIN } from '@/constants/marketting';
import { Container } from '../layouts/Container';
import { BlogCard } from './BlogCard';

export default function LatestFromBlog() {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <Container className="flex flex-col gap-8.5">
      <div className="flex flex-col gap-3.5 sm:items-center sm:text-center">
        <div className="flex flex-col gap-2 sm:items-center">
          <div className="flex w-fit items-center gap-1 rounded-lg bg-gradient-to-r from-semantic-success-50 to-semantic-success-100 px-2 py-1">
            <GlobeIcon
              className="size-4 text-semantic-success-600"
              weight="bold"
            />
            <span className="font-manrope font-semibold text-semantic-success-600 text-xs">
              {BLOG_DOMAIN}
            </span>
          </div>
          <h3 className="font-bold text-3xl text-heading leading-[100%]">
            Latest from blogs.
          </h3>
        </div>
        <div className="max-w-[30rem]">
          <span className="font-manrope font-medium text-sm text-subheading leading-5">
            Empowering Muslim parents with Islamic parenting tips, Qur'an
            learning resources, and child-safe EdTech tools — built for today's
            digital-first Muslim generation.
          </span>
        </div>
      </div>
      <div className="group relative sm:mx-10">
        <Carousel
          opts={{
            align: 'start',
            loop: false,
            skipSnaps: false,
            dragFree: false,
          }}
          setApi={setApi}
        >
          <CarouselContent className="w-full">
            {/* Use stable keys instead of array index */}
            {[
              'latest-from-blog-1',
              'latest-from-blog-2',
              'latest-from-blog-3',
              'latest-from-blog-4',
              'latest-from-blog-5',
              'latest-from-blog-6',
            ].map((id) => (
              <CarouselItem className="md:basis-1/4" key={id}>
                <BlogCard />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Button
          className="-left-12 -translate-y-1/2 absolute top-1/2 z-10 hidden size-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100 md:flex"
          onClick={scrollPrev}
          size="icon"
          variant="outline"
        >
          <ArrowLeft className="size-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          className="-right-12 -translate-y-1/2 absolute top-1/2 z-10 hidden size-8 rounded-full opacity-0 transition-opacity group-hover:opacity-100 md:flex"
          onClick={scrollNext}
          size="icon"
          variant="outline"
        >
          <ArrowRight className="size-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </Container>
  );
}
