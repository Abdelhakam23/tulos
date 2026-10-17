import { FooterData } from "@/types/types";
import {
  Ban,
  BoxIcon,
  CircleQuestionMarkIcon,
  Clock,
  FileText,
  Globe,
  HeartHandshake,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  RefreshCcw,
  Scale,
  Share2,
  ShieldAlert,
  ShieldCheck,
  Users,
  VanIcon,
  Zap,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

export const navbarData = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Men",
    href: "/men",
  },
  {
    title: "Woman",
    href: "/woman",
  },
  {
    title: "Kids",
    href: "/kids",
  },
  {
    title: "New",
    href: "/new",
  },
  {
    title: "Featured",
    href: "/featured",
  },
  {
    title: "Gift",
    href: "/gift",
  },
];

export const productType = [
  {
    title: `Women's Fashion`,
  },
  {
    title: "Electronics",
  },
  {
    title: "Men",
  },
  {
    title: "Music",
  },
];

export const socialLinks = [
  {
    title: "Github",
    href: "https://github.com/Abdelhakam23",
    icon: <SlSocialGithub />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/Abd2lhakam23",
    icon: <SlSocialFacebook />,
  },
  {
    title: "Twitter",
    href: "https://x.com/Mahmoud309202",
    icon: <BsTwitterX />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/abdelhakam21/",
    icon: <SlSocialLinkedin />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/mahmooud_abdelhakam/",
    icon: <SlSocialInstagram />,
  },
];

export const data: FooterData[] = [
  {
    title: "Visit Us",
    subtitle: "New Cairo, Egypt",
    icon: (
      <MapPin className="w-5 h-5 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+201501571866",
    icon: (
      <Phone className="w-5 h-5 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Sat - Friday:10:00 AM - 7:00 PM",
    icon: (
      <Clock className="w-5 h-5 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "tulos@gamil.com",
    icon: (
      <Mail className="w-5 h-5 text-gray-600 group-hover:text-darkColor transition-colors" />
    ),
  },
];

export const quickLinks = [
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
  },
  {
    title: "Privacy Policy",
    href: "privacy",
  },
  {
    title: "FAQs",
    href: "/faqs",
  },
];

export const categoriesData = [
  {
    title: "Women's Fashion",
    href: "/women",
  },
  {
    title: "Electronics",
    href: "/electronics",
  },
  {
    title: "Men",
    href: "/men",
  },
  {
    title: "Music",
    href: "/music",
  },
];

export const productFaqs = [
  {
    title: "Compare color",
    icon: <BoxIcon className="h-5 w-5" />,
  },
  {
    title: "Ask a question",
    icon: <CircleQuestionMarkIcon className="h-5 w-5" />,
  },
  {
    title: "Delivery & Return",
    icon: <VanIcon className="h-5 w-5" />,
  },
  {
    title: "Share",
    icon: <Share2 className="h-5 w-5" />,
  },
];

export const coreValues = [
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    title: "Quality Guaranteed",
    desc: "Every product in our catalog is carefully vetted to meet the highest standards of performance and durability.",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Fast & Reliable",
    desc: "From browsing to delivery, we're obsessed with speed. Orders are processed and dispatched within 24 hours.",
  },
  {
    icon: <HeartHandshake className="w-4 h-4" />,
    title: "Customer First",
    desc: "We genuinely care about your experience. Our support team is always here to make things right.",
  },
  {
    icon: <PackageCheck className="w-4 h-4" />,
    title: "Transparent Pricing",
    desc: "No hidden fees, no surprises. What you see is what you pay — fair, honest, always.",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Community Driven",
    desc: "Built around real feedback from real customers. Every feature we ship comes from listening to you.",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "Worldwide Reach",
    desc: "Serving customers in 50+ countries with localized experiences and global-standard logistics.",
  },
];

export const termsAndConditions = [
  {
    icon: <FileText className="w-4 h-4" />,
    title: "Acceptance of Terms",
    term: "By accessing or using Tulos's website, mobile app, or any of our services, you agree to be bound by these Terms and Conditions in full. If you do not agree with any part, please discontinue use immediately. We may update these terms at any time — continued use after changes constitutes acceptance.",
  },
  {
    icon: <ShieldAlert className="w-4 h-4" />,
    title: "Use of Services",
    term: "You agree to use Tulos's services solely for lawful purposes. You must not use our platform to engage in any fraudulent activity, transmit harmful content, attempt unauthorised access, or violate any applicable law or regulation. Violations may result in immediate account termination.",
  },
  {
    icon: <Scale className="w-4 h-4" />,
    title: "Intellectual Property",
    term: "All content, branding, graphics, logos, text, and software on Tulos are the exclusive property of Tulos or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.",
  },
  {
    icon: <Ban className="w-4 h-4" />,
    title: "Limitation of Liability",
    term: "To the maximum extent permitted by law, Tulos shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, or goodwill — arising from your use of, or inability to use, our services, even if we have been advised of the possibility of such damages.",
  },
  {
    icon: <RefreshCcw className="w-4 h-4" />,
    title: "Returns & Refunds",
    term: "Products may be returned within 30 days of delivery in their original condition. Refunds are processed within 5–7 business days after we receive and inspect the returned item. Digital products and items marked as non-returnable are excluded from this policy.",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "Governing Law",
    term: "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the jurisdiction in which Tulos operates. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of those courts.",
  },
];
