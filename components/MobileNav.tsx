'use client';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@/components/ui/sheet';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTrigger>
                    <Image src="/icons/hamburger.svg" width={30} height={30} alt="menu" className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent side={'left'} className="border-none bg-white">
                    <Link href={'/'} className="flex cursor-pointer items-center gap-1 px-4">
                        <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon Logo" />
                        <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
                    </Link>
                    <div className="mobilenav-sheet">
                        <SheetClose asChild>
                            <nav className="flex h-screen flex-col gap-6 pt-16 text-white">
                                {sidebarLinks.map(item => {
                                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                                    return (
                                        <SheetClose asChild key={item.label}>
                                            <Link
                                                href={item.route}
                                                key={item.label}
                                                className={cn('mobilenav-sheet_close w-full', {
                                                    'bg-bank-gradient': isActive
                                                })}
                                            >
                                                <div className="relative size-6">
                                                    <Image
                                                        src={item.imgURL}
                                                        width={20}
                                                        height={20}
                                                        alt={item.label}
                                                        className={cn({
                                                            'brightness-[3] invert-0': isActive
                                                        })}
                                                    />
                                                </div>
                                                <p
                                                    className={cn('text-16 font-semibold text-black-2', {
                                                        'text-white': isActive
                                                    })}
                                                >
                                                    {item.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}

                                USER
                            </nav>
                        </SheetClose>

                        FOOTER
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
