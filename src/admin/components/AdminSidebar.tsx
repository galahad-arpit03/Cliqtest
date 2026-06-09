"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAdminUIStore, useAuthStore } from "@/admin/store/adminStore";
import { LayoutDashboard, Home, Navigation, Footprints, Users, Settings, Lightbulb, Factory, Package, FileText, Briefcase, Phone, Palette, ChevronDown } from "lucide-react";

type SubItem = { label: string; href: string };
type NavItem =
  | { divider: true }
  | { label: string; href: string; icon: React.ReactNode; subItems?: never }
  | { label: string; icon: React.ReactNode; subItems: SubItem[]; href?: never };

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/administrator/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> },
  { label: "Home (Landing)", href: "/administrator/home", icon: <Home className="w-4 h-4" /> },
  { divider: true },
  {
    label: "Platform",
    icon: <Package className="w-4 h-4" />,
    subItems: [
      { label: "AI Capabilities", href: "/administrator/platform/ai-capabilities" },
      { label: "Test Management", href: "/administrator/platform/test-management" },
      { label: "No-Code Automation", href: "/administrator/platform/nocode" },
      { label: "Analytics", href: "/administrator/platform/analytics" },
      { label: "Device Labs", href: "/administrator/platform/devicelabs" },
    ],
  },
  {
    label: "Solutions",
    icon: <Lightbulb className="w-4 h-4" />,
    subItems: [
      { label: "By Team", href: "/administrator/solutions/by-team" },
      { label: "By Industry", href: "/administrator/solutions/by-industry" },
      { label: "By Use Case", href: "/administrator/solutions/by-use-case" },
      { label: "Success Stories", href: "/administrator/solutions/success-stories" },
    ],
  },
  {
    label: "Company",
    icon: <Users className="w-4 h-4" />,
    subItems: [
      { label: "About Us", href: "/administrator/company/about" },
      { label: "Why cliQTest?", href: "/administrator/company/why-cliqtest" },
      { label: "Leadership", href: "/administrator/company/leadership" },
      { label: "Global Presence", href: "/administrator/company/global-presence" },
      { label: "Partners & Alliances", href: "/administrator/company/partners-alliances" },
      { label: "Clients", href: "/administrator/company/clients" },
      { label: "Compliance & Security", href: "/administrator/company/compliance-security" },
      { label: "CSR Community", href: "/administrator/company/csr-community" },
    ],
  },
  {
    label: "Resources",
    icon: <FileText className="w-4 h-4" />,
    subItems: [
      { label: "Blogs", href: "/administrator/blogs" },
      { label: "Pricing", href: "/administrator/pricing" },
      { label: "Integrations", href: "/administrator/integrations" },
      { label: "Book a Demo", href: "/administrator/book-a-demo" },
    ],
  },
  {
    label: "Legal",
    icon: <Briefcase className="w-4 h-4" />,
    subItems: [
      { label: "Privacy Policy", href: "/administrator/privacy-policy" },
      { label: "Terms & Conditions", href: "/administrator/terms-conditions" },
      { label: "Security Policy", href: "/administrator/security-policy" },
      { label: "Cookie Policy", href: "/administrator/cookie-policy" },
    ],
  },
  { divider: true },
  { label: "Colors & Theming", href: "/administrator/colors", icon: <Palette className="w-4 h-4" /> },
  { label: "Settings", href: "/administrator/settings", icon: <Settings className="w-4 h-4" /> },
];

function SidebarItem({ item, pathname, collapsed }: { item: NavItem; pathname: string; collapsed: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  if ("divider" in item) {
    return <div className="my-2 border-t border-[#2A2A2A]" />;
  }

  const hasSubItems = "subItems" in item && item.subItems;
  const isActive = !hasSubItems ? pathname === item.href : item.subItems.some((sub) => pathname === sub.href);

  const buttonContent = (
    <>
      <span className="text-base flex-shrink-0">{item.icon}</span>
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            className="font-medium whitespace-nowrap overflow-hidden flex-1 text-left flex items-center justify-between"
          >
            {item.label}
            {hasSubItems && (
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );

  const itemClass = `flex w-full items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 group ${
    isActive && !hasSubItems
      ? "bg-[#6843B7]/20 text-[#6843B7] border border-[#6843B7]/30"
      : isActive && hasSubItems
      ? "text-[#FAFAFA]"
      : "text-[#7A7A7A] hover:bg-[#1A1A1A] hover:text-[#FAFAFA]"
  }`;

  if (hasSubItems) {
    return (
      <div className="flex flex-col">
        <button onClick={() => setIsOpen(!isOpen)} className={itemClass}>
          {buttonContent}
        </button>
        <AnimatePresence>
          {isOpen && !collapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden flex flex-col gap-1 ml-9 mt-1"
            >
              {item.subItems.map((sub, i) => (
                <Link
                  key={i}
                  href={sub.href}
                  className={`text-xs px-3 py-1.5 rounded-md transition-colors ${
                    pathname === sub.href ? "text-[#6843B7] font-semibold bg-[#6843B7]/10" : "text-[#7A7A7A] hover:text-[#FAFAFA] hover:bg-[#1A1A1A]"
                  }`}
                >
                  {sub.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link href={item.href!} className={itemClass}>
      {buttonContent}
    </Link>
  );
}

export default function AdminSidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed: collapsed, toggleSidebar: onToggle } = useAdminUIStore();
  const { logout } = useAuthStore();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-10 left-0 h-[calc(100vh-40px)] bg-[#0D0D0D] border-r border-[#2A2A2A] z-45 flex flex-col transition-all duration-300 ${
        collapsed
          ? "w-16 max-md:w-0 max-md:opacity-0 max-md:pointer-events-none max-md:-translate-x-full overflow-hidden border-none"
          : "w-64 max-md:z-50 max-md:shadow-[5px_0_25px_rgba(0,0,0,0.6)]"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#2A2A2A]">
        {!collapsed && (
          <span className="font-heading font-bold text-sm text-[#FAFAFA]">
            cliQTest
          </span>
        )}
        <button
          onClick={onToggle}
          className="text-[#7A7A7A] hover:text-[#FAFAFA] transition-colors ml-auto cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {collapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto hide-scrollbar py-3 space-y-0.5 px-2">
        {navItems.map((item, idx) => (
          <SidebarItem key={idx} item={item} pathname={pathname ?? ""} collapsed={collapsed} />
        ))}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-[#2A2A2A] flex justify-between items-center">
          <p className="text-[10px] text-[#3A3A3A]">cliQTest Admin v1.0</p>
          <button onClick={logout} className="sm:hidden text-[10px] text-[#7A7A7A] hover:text-[#FF4444] cursor-pointer">
            Logout
          </button>
        </div>
      )}
    </motion.aside>
  );
}
