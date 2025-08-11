import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export function CTAButtons({ fullWidth = false }) {
  return (
    <div className={`flex ${fullWidth ? 'w-full flex-col' : 'gap-5'}`}>
      <Button
        className={cn(
          fullWidth
            ? 'h-16 w-full rounded-none bg-brand font-semibold text-lg text-primary'
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
          fullWidth
            ? 'h-16 w-full rounded-none font-bold text-lg'
            : 'rounded-full'
        )}
        size={fullWidth ? 'lg' : 'sm'}
        type="button"
      >
        Get Free Demo
      </Button>
    </div>
  );
}
