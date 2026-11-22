import { FeatureItem, MetricItem, IndustryItem, NavLink, PricingPlan } from "@/types";

export const BRAND_INFO = {
  name: "GoodBilling",
  tagline: "Billing & Inventory ERP",
  heroBadge: "#1 Billing & Inventory Solution",
  heroTitlePrefix: "All-in-One",
  heroTitleHighlight: "Billing & Business",
  heroTitleSuffix: "Management Software",
  heroDescription:
    "Manage your sales, purchase, inventory, accounting, HRM and more - all in one powerful and easy to use platform.",
  trustBadges: [
    { icon: "CreditCard", text: "No Credit Card Required" },
    { icon: "Zap", text: "Setup in 5 Minutes" },
    { icon: "Headphones", text: "Free Support" },
  ],
  heroChecklist: [
    { title: "POS & Retail Billing" },
    { title: "HRM & Payroll" },
    { title: "Inventory Management" },
    { title: "Multi-Branch Support" },
    { title: "Accounting & Reports" },
    { title: "GST & E-Waybill Ready" },
  ],
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  {
    label: "Modules",
    href: "/modules",
    children: [
      {
        label: "POS & Retail Billing",
        description: "Barcode scanning, thermal receipt printing, fast checkout",
        href: "/modules#pos",
        icon: "ShoppingCart",
      },
      {
        label: "Inventory Management",
        description: "Stock tracking, low stock alerts, warehouse transfers",
        href: "/modules#inventory",
        icon: "Package",
      },
      {
        label: "GST & E-Waybill",
        description: "100% compliant GST invoicing, GSTR 1/3B json export",
        href: "/modules#gst",
        icon: "FileCheck2",
      },
      {
        label: "Accounting & Ledger",
        description: "Double-entry books, profit & loss, balance sheets",
        href: "/modules#accounting",
        icon: "Calculator",
      },
      {
        label: "HRM & Payroll",
        description: "Biometric attendance, salary slips, employee leaves",
        href: "/modules#hrm",
        icon: "Users2",
      },
      {
        label: "Multi-Branch ERP",
        description: "Centralized control across all retail outlets and stores",
        href: "/modules#branches",
        icon: "Building2",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    children: [
      {
        label: "Documentation & User Guides",
        description: "Step-by-step documentation to set up your business",
        href: "/resources#docs",
        icon: "BookOpen",
      },
      {
        label: "Video Tutorials",
        description: "Watch how to configure GST, barcodes, and print layouts",
        href: "/resources#videos",
        icon: "PlayCircle",
      },
      {
        label: "GST Masterclasses",
        description: "Stay updated with e-invoicing laws and filing guides",
        href: "/resources#gst-guide",
        icon: "HelpCircle",
      },
    ],
  },
];

export const FEATURES: FeatureItem[] = [
  {
    id: "pos-billing",
    title: "POS & Billing",
    description: "Fast & modern POS with barcode support, thermal printing and multi-payment options.",
    icon: "ShoppingCart",
    href: "/modules#pos",
  },
  {
    id: "inventory",
    title: "Inventory Management",
    description: "Track stock, manage products, variants & warehouses with instant low-stock alerts.",
    icon: "Package",
    href: "/modules#inventory",
  },
  {
    id: "purchase-sales",
    title: "Purchase & Sales",
    description: "Manage purchase, sales, returns and due easily with automated debit/credit notes.",
    icon: "ShoppingBag",
    href: "/modules#purchase-sales",
  },
  {
    id: "accounting",
    title: "Accounting",
    description: "Complete accounting with ledger, payments & reports following standard compliance.",
    icon: "Calculator",
    href: "/modules#accounting",
  },
  {
    id: "hrm-payroll",
    title: "HRM & Payroll",
    description: "Manage employees, attendance, leaves and payroll with one-click payslip generation.",
    icon: "UserCheck",
    href: "/modules#hrm",
  },
  {
    id: "ewaybill-gst",
    title: "E-Waybill & GST",
    description: "Generate e-waybill, GST invoices and stay compliant with verified Govt portals.",
    icon: "FileText",
    href: "/modules#gst",
  },
  {
    id: "reports-analytics",
    title: "Reports & Analytics",
    description: "Get real-time business insights with detailed reports on margins, revenue and trends.",
    icon: "BarChart3",
    href: "/modules#reports",
  },
  {
    id: "multi-branch",
    title: "Multi-Branch",
    description: "Run multiple branches from a single, centralized system with synchronized inventory.",
    icon: "Building2",
    href: "/modules#branches",
  },
];

export const METRICS: MetricItem[] = [
  {
    value: "10,000+",
    label: "Active Businesses",
    subtext: "Across retail & wholesale",
    icon: "Users2",
  },
  {
    value: "50+",
    label: "Powerful Modules",
    subtext: "To run end-to-end operations",
    icon: "Layers",
  },
  {
    value: "99.9%",
    label: "Uptime & Reliable",
    subtext: "Cloud backed with high availability",
    icon: "ShieldCheck",
  },
  {
    value: "24/7",
    label: "Customer Support",
    subtext: "WhatsApp, phone & ticket desk",
    icon: "Headphones",
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    name: "Retail Stores",
    icon: "ShoppingBag",
    description: "Fast barcode checkout, customer loyalty points, and stock alerts for garments, electronics & lifestyle.",
  },
  {
    name: "Wholesale",
    icon: "Boxes",
    description: "Bulk rate slabs, credit limit tracking, vendor management, and dispatch ledger handling.",
  },
  {
    name: "Restaurants",
    icon: "UtensilsCrossed",
    description: "Kitchen order ticketing (KOT), table management, split billing, and digital menu integration.",
  },
  {
    name: "Supermarkets",
    icon: "Store",
    description: "High-speed weighing scale integration, batch & expiry management, and express checkout aisles.",
  },
  {
    name: "Distributors",
    icon: "Truck",
    description: "Multi-warehouse dispatch, sales agent tracking, route management, and commission distribution.",
  },
  {
    name: "Service Businesses",
    icon: "LayoutGrid",
    description: "Service job sheets, technician dispatch, maintenance AMC contracts, and recurring invoices.",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Ideal for single retail shops and newly opened stores.",
    priceMonthly: 799,
    priceAnnual: 649,
    features: [
      "1 Store / Outlet",
      "Up to 2 User Accounts",
      "Unlimited Invoices & Quotations",
      "Basic Inventory & Barcode Support",
      "GST Compliant Invoicing",
      "Standard Email Support",
    ],
    ctaText: "Start 14-Day Free Trial",
    ctaHref: "/register?plan=starter",
  },
  {
    id: "growth",
    name: "Professional",
    description: "Perfect for growing retail stores, supermarkets, and wholesale traders.",
    priceMonthly: 1899,
    priceAnnual: 1499,
    isPopular: true,
    features: [
      "Up to 3 Outlets / Branches",
      "Up to 10 User Accounts with Roles",
      "Advanced Inventory, Batches & Expiry",
      "E-Waybill & E-Invoice Integration",
      "Thermal Receipt & Barcode Label Designer",
      "HRM, Attendance & Basic Payroll",
      "WhatsApp Invoice Sharing",
      "Priority 24/7 Phone & Chat Support",
    ],
    ctaText: "Get Started Free",
    ctaHref: "/register?plan=professional",
  },
  {
    id: "enterprise",
    name: "Enterprise ERP",
    description: "Tailored for large chains, franchises, and enterprise distributors.",
    priceMonthly: 4499,
    priceAnnual: 3599,
    features: [
      "Unlimited Branches & Warehouses",
      "Unlimited Staff & Cashier Accounts",
      "Centralized Multi-Store Sync",
      "Full Accounting, P&L, Balance Sheets",
      "Advanced HRM & Biometric Attendance",
      "Dedicated Account Manager",
      "Custom API & ERP Integrations",
      "99.99% SLA Uptime Guarantee",
    ],
    ctaText: "Contact Enterprise Sales",
    ctaHref: "/book-demo?type=enterprise",
  },
];
