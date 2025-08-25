import { XIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { type PropsWithChildren, useState } from 'react';
import handshakeIcon from '@/assets/icons/handshake.svg';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import { LeadForm } from './LeadForm';

export function LeadDrawer({
  children,
  phone,
}: PropsWithChildren & { phone?: string }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button aria-haspopup="dialog" asChild onClick={() => setOpen(true)}>
        {children}
      </Button>
      {isMobile ? (
        <Drawer onOpenChange={setOpen} open={open}>
          <DrawerContent>
            <DrawerHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <Image alt="Handshake" src={handshakeIcon} />
                <DrawerTitle className="font-extrabold font-manrope text-lg leading-5">
                  Salam
                </DrawerTitle>
              </div>
              <DrawerClose>
                <Button className="rounded-full" size="icon" variant="outline">
                  <XIcon />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <div className="px-5 pb-6">
              <LeadForm initialPhone={phone} key={phone} />
            </div>
          </DrawerContent>
        </Drawer>
      ) : (
        <Sheet onOpenChange={setOpen} open={open}>
          <SheetContent side="right">
            <SheetHeader className="border-light border-b px-6 py-4.5">
              <div className="flex items-center gap-2">
                <Image alt="Handshake" src={handshakeIcon} />
                <SheetTitle className="font-extrabold font-manrope text-lg leading-5">
                  Salam
                </SheetTitle>
              </div>
            </SheetHeader>
            <div className="mb-6 h-full px-6">
              <LeadForm initialPhone={phone} key={phone} />
            </div>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
