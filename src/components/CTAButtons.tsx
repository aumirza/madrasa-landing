import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export default function CTAButtons({ fullWidth = false }) {
  return (
    <div className={`flex ${fullWidth ? 'w-full flex-col' : 'gap-5'}`}>
      <Button
        className={cn(
          fullWidth
            ? 'w-full rounded-none bg-brand text-primary'
            : 'hidden rounded-full md:flex'
        )}
        size={fullWidth ? 'lg' : 'sm'}
        type="button"
        variant={'ghost'}
      >
        Join As an Ustaad
      </Button>
      <Button
        className={cn(
          'bg-gradient-cta',
          fullWidth ? 'w-full rounded-none' : 'rounded-full'
        )}
        size={fullWidth ? 'lg' : 'sm'}
        type="button"
      >
        Get Free Demo
      </Button>
    </div>
  );
}
