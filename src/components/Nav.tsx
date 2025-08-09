import { ArrowUpRightIcon } from '@phosphor-icons/react/ssr';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from './ui/navigation-menu';

export const NAV_ITEMS = [
  { label: 'Tutors (Ustaad)', href: '/tutors' },
  { label: 'Courses', href: '/courses' },
  {
    label: 'Solutions',
    items: [
      {
        label: 'For Parents',
        description: 'Extract, manage and work with humongous',
        href: '#',
      },
      {
        label: 'For Kids',
        description: 'Extract, manage and work with humongous',
        href: '#',
      },
      {
        label: 'For Students',
        description: 'Extract, manage and work with humongous',
        href: '#',
      },
      {
        label: 'For Professionals',
        description: 'Extract, manage and work with humongous',
        href: '#',
      },
      {
        label: 'Women-Only',
        description: 'Extract, manage and work with humongous',
        href: '#',
      },
    ],
  },
  { label: 'Compare', items: [] },
  { label: 'Blog', href: '/blog' },
];

export function Nav() {
  return (
    <NavigationMenu className="hidden lg:flex" viewport={false}>
      <NavigationMenuList className="text-heading">
        {NAV_ITEMS.map((item) =>
          item.items ? (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent className="z-[9999] p-0!">
                <ul className="flex w-fit flex-col gap-2 py-4">
                  {item.items.map((subItem) => (
                    <li
                      className="group/subitem px-5 py-2.5 hover:bg-brand"
                      key={subItem.label}
                    >
                      <NavigationMenuLink asChild>
                        <Link className="flex-row gap-3" href={subItem.href}>
                          <div>
                            <h4 className="font-medium group-hover/subitem:text-primary">
                              {subItem.label}
                            </h4>
                            <p className="text-nowrap font-medium text-sm text-subheading ">
                              {subItem.description}
                            </p>
                          </div>
                          <ArrowUpRightIcon className="size-4 text-heading group-hover/subitem:text-primary" />
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink asChild>
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
