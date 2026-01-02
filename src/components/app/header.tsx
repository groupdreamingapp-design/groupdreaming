
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MainNav } from "./main-nav"
import { Menu, Info } from "lucide-react"
import { Logo } from "../icons"
import Link from "next/link"
import { UserNav } from "./user-nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"

export function Header() {
  const infoLinks = [
    { href: "/panel/transparency", label: "Transparencia" },
    { href: "/panel/benefits", label: "Beneficios" },
    { href: "/panel/rules", label: "Reglamento" },
    { href: "/panel/faq", label: "Preguntas Frecuentes" },
  ];

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        {/* Desktop nav is in the sidebar */}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden p-2 -ml-2 rounded-md focus:bg-accent focus:text-accent-foreground">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Abrir menú</span>
          </button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Group Dreaming</span>
            </Link>
            <MainNav isMobile={true} />
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Info className="h-5 w-5" />
                <span className="sr-only">Información</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {infoLinks.map(link => (
                 <DropdownMenuItem key={link.href} asChild>
                    <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        <UserNav />
      </div>
    </header>
  )
}
