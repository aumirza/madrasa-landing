import { cn } from '@/lib/utils';

type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
type FluidBreakpoint = true | MaxWidth;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: MaxWidth; // Controls the max width
  fluid?: FluidBreakpoint; // Shortcut for full width
}

const maxWidthClasses: Record<MaxWidth, string> = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-[66.25rem]', //1060px //max-w-screen-lg =1060
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

const fluidPaddingClasses: Record<MaxWidth, string> = {
  sm: 'px-0 sm:px-6 lg:px-8',
  md: 'px-0 md:px-6 lg:px-8',
  lg: 'px-0 lg:px-8',
  xl: 'px-0 xl:px-8',
  '2xl': 'px-0 2xl:px-8',
  full: 'px-0',
};

export function Container({
  maxWidth = 'lg',
  fluid,
  className,
  ...props
}: ContainerProps) {
  let paddingClass: string;
  let maxWidthClass: string;

  if (fluid === true) {
    paddingClass = 'px-0';
    maxWidthClass = maxWidthClasses.full;
  } else if (fluid) {
    paddingClass = fluidPaddingClasses[fluid];
    maxWidthClass = maxWidthClasses[maxWidth];
  } else {
    paddingClass = 'px-5 sm:px-6 lg:px-8';
    maxWidthClass = maxWidthClasses[maxWidth];
  }

  return (
    <div
      className={cn(
        'mx-auto w-full', // base
        paddingClass, // padding
        maxWidthClass, // max width
        className
      )}
      {...props}
    />
  );
}
