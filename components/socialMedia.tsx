import { socialLinks } from "@/constants";
import { cn } from "../lib/utils";
import Link from "next/link";
import { JSX } from "react/jsx-runtime";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface Props {
  className?: string;
  iconClassName?: string;
  icon?: JSX.Element;
  title?: string;
  toolTipClassName?: string;
}

const SocialMedia = ({
  className,
  iconClassName,
  title,
  icon,
  toolTipClassName,
}: Props) => {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-3.5">
        {socialLinks.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger>
              <div
                className={cn(
                  "border p-2 rounded-full hover:border-white hoverEffect group",
                  className,
                )}
              >
                <Link
                  className={cn(
                    "group-hover:text-white hoverEffect",
                    iconClassName,
                  )}
                  href={item?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item?.icon ?? icon}
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent
              className={cn("bg-white text-darkColor", toolTipClassName)}
            >
              <p>{item?.title ?? title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
