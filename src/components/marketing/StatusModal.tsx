import { XIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import whatsappIcon from '@/assets/icons/whatsapp.svg';
import happyEmoji from '@/assets/images/happy-emoji.gif';
import sadEmoji from '@/assets/images/sad-emoji.png';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from '../ui/drawer';

type StatusModalProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  status?: 'success' | 'error';
  children?: React.ReactNode;
};

export function StatusModal({
  open,
  onOpenChange,
  title = 'Status',
  description,
  status = 'success',
}: StatusModalProps) {
  const component = (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-b from-[#FFDBBA] to-[#FFFFFF]">
          <Image
            alt={status === 'success' ? 'happy' : 'sad'}
            className="size-10"
            src={status === 'success' ? happyEmoji : sadEmoji}
          />
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <h3 className="font-bold text-heading text-xl">{title}</h3>
          <p className="font-manrope text-sm text-subheading leading-[145%]">
            {description}
          </p>
        </div>
      </div>
      <Button className="h-10 bg-gradient-to-b from-neutral-600 to-neutral-800">
        <Image alt="whatsapp" src={whatsappIcon} />
        <span className="font-bold font-manrope text-sm">
          Get Support on WhatsApp
        </span>
      </Button>
    </div>
  );
  return (
    <>
      {/* Mobile: use Sheet (drawer) */}
      <Drawer onOpenChange={onOpenChange} open={open}>
        <DrawerContent className="sm:hidden">
          <DrawerHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <DrawerTitle className="sr-only">{title}</DrawerTitle>
              {description && (
                <DrawerDescription className="sr-only">
                  {description}
                </DrawerDescription>
              )}
            </div>
            <DrawerClose>
              <Button className="rounded-full" size="icon" variant="outline">
                <XIcon />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="p-4">{component}</div>
        </DrawerContent>
      </Drawer>

      {/* Desktop: use Dialog */}
      <Dialog onOpenChange={onOpenChange} open={open}>
        <DialogContent
          className="hidden s:max-w-sm sm:block"
          showCloseButton={false}
        >
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <DialogTitle className="sr-only">{title}</DialogTitle>
              {description && (
                <DialogDescription className="sr-only">
                  {description}
                </DialogDescription>
              )}
            </div>
            <DialogClose>
              <Button className="rounded-full" size="icon" variant="outline">
                <XIcon />
              </Button>
            </DialogClose>
          </div>
          <div className="p-2">{component}</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
