import { FooterData } from "@/types/types";
import {
  Ban,
  BoxIcon,
  ChartNoAxesColumn,
  CircleQuestionMarkIcon,
  Clock,
  Cookie,
  Database,
  FileText,
  Globe,
  HeartHandshake,
  Lock,
  Mail,
  MapPin,
  PackageCheck,
  Phone,
  RefreshCcw,
  Scale,
  Share2,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
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

export const privacyPolicy = [
  {
    icon: <Database className="w-4 h-4" />,
    title: "Information We Collect",
    term: "We collect information you voluntarily provide — such as your name, email, shipping address, and payment details — when you register, place an order, or contact us. We also automatically collect device and usage data (IP address, browser type, pages visited) to improve our services.",
  },
  {
    icon: <ChartNoAxesColumn className="w-4 h-4" />,
    title: "How We Use Your Information",
    term: "We use your data to process orders, personalise your experience, send transactional emails and relevant promotions (with your consent), detect fraud, and comply with legal obligations. We never sell your data to third parties for their own marketing purposes.",
  },
  {
    icon: <Share2 className="w-4 h-4" />,
    title: "Information Sharing",
    term: "We may share your data with trusted service providers (payment processors, delivery partners, analytics tools) strictly to operate our platform. All third parties are contractually obligated to protect your data and use it only as instructed by us.",
  },
  {
    icon: <Lock className="w-4 h-4" />,
    title: "Data Security",
    term: "We implement industry-standard security measures including TLS encryption, access controls, and regular security audits to protect your personal information. However, no method of transmission over the internet is 100% secure — if you suspect a breach, contact us immediately.",
  },
  {
    icon: <Cookie className="w-4 h-4" />,
    title: "Cookies & Tracking",
    term: "We use essential cookies to operate the site, performance cookies to understand usage patterns, and optional marketing cookies to deliver relevant ads. You can manage your cookie preferences at any time through your browser settings or our cookie banner.",
  },
  {
    icon: <UserCheck className="w-4 h-4" />,
    title: "Your Rights",
    term: "You have the right to access, correct, download, or delete your personal data at any time. You can also withdraw consent for marketing communications or request data portability. To exercise any of these rights, contact our Privacy Officer at privacy@tulos.com.",
  },
];

export const faqsDetails = [
  {
    title: "How do I place an order on Tulos?",
    answer:
      "Browsing and buying is simple — find a product you love, click 'Add to Cart', review your cart, and proceed to checkout. You'll need to sign in and have a saved delivery address to complete your purchase. Payment is processed securely via Stripe.",
  },
  {
    title: "How long does delivery take?",
    answer:
      "Standard delivery takes 3–5 business days. Express delivery (1–2 business days) is available at checkout for an additional fee. International orders typically arrive within 7–14 business days depending on your location.",
  },
  {
    title: "What is your return and refund policy?",
    answer:
      "We offer a 30-day return window for most products. Items must be in their original, unused condition with all packaging intact. Once we receive and inspect your return, refunds are processed within 5–7 business days to your original payment method.",
  },
  {
    title: "Which payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex), Apple Pay, and Google Pay — all processed securely through Stripe. You can save your payment details for faster checkout in the future.",
  },
  {
    title: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive an email with a tracking number and a direct link to follow your package in real time. You can also check your order status any time by visiting the 'My Orders' section in your account.",
  },
  {
    title: "Can I change or cancel my order after placing it?",
    answer:
      "Orders can be modified or cancelled within 1 hour of placing them, while they're still in 'Pending' status. After that, our fulfilment process begins and changes may not be possible. Please contact our support team immediately if you need assistance.",
  },
  {
    title: "Is my personal and payment information secure?",
    answer:
      "Absolutely. All data is encrypted in transit using TLS, and we never store your full card details — that's handled entirely by Stripe, a PCI-DSS Level 1 certified payment processor. Your information is never sold to third parties.",
  },
  {
    title: "Do you offer discounts or promotional codes?",
    answer:
      "Yes! We regularly run promotions through our Offers and Deals pages. You can also apply coupon codes at checkout. Subscribe to our newsletter to be the first to hear about flash sales and exclusive member offers",
  },
];
