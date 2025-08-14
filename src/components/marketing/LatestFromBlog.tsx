'use client';

import { GlobeIcon } from '@phosphor-icons/react';
import { BLOG_DOMAIN } from '@/constants/marketting';
import { Container } from '../layouts/Container';
import { BlogCard } from './BlogCard';

export default function LatestFromBlog() {
  return (
    <Container className="flex flex-col gap-8.5">
      <div className="flex flex-col items-center gap-3.5 text-center">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg bg-gradient-to-r from-semantic-success-50 to-semantic-success-100 px-2 py-1">
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
      <div className="grid grid-cols-1 grid-rows-1 gap-3.5 md:grid-cols-4">
        {new Array(4).fill(0).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </Container>
  );
}
