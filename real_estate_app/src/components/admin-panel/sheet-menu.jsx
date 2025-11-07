import { Link } from "react-router-dom";
import { MenuIcon, PanelsTopLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Menu } from "@/components/admin-panel/menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet";
import { useEffect, useState } from "react";
import { useFrappeGetDoc } from "frappe-react-sdk";
import logo from "@/assets/logos/logo-icon-transparent.png"; // adjust the path as necessary


export function SheetMenu() {
  const [company, setCompany] = useState('')
  const { data: companyData } = useFrappeGetDoc("Company");

  useEffect(() => {
    if (companyData) {
      setCompany(companyData?.[0]?.name); // safe access
    }
  }, [companyData]);

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href="/dashboard" className="flex items-center gap-2">
              {/* <PanelsTopLeft className="w-6 h-6 mr-1" /> */}
              <img src={logo} alt="ST" className="w-8 h-8 mb-1" />
              <SheetTitle className="font-bold text-lg">{company}</SheetTitle>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
      </SheetContent>
    </Sheet>
  );
}
