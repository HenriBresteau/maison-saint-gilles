import { cva, VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

const BadgeSectionVariants = cva(
  "inline-flex items-center w-fit gap-2 rounded-full font-medium transition-all duration-300 shadow",
  {
    variants: {
      variant: {
        default: "bg-cream-100 text-slate-700 border border-slate-200",
        primary: "bg-navy-100 text-navy-900 border border-navy-200",
        ghost: "bg-transparent text-slate-600 border border-slate-300",
      },
      size: {
        small: "px-3 py-1 text-xs",
        medium: "px-3 py-2 text-lg",
        large: "px-5 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  },
);

interface BadgeSectionProps extends VariantProps<typeof BadgeSectionVariants> {
  children: ReactNode;
  icon: LucideIcon;
  className?: string;
}

const BadgeSection = ({
  children,
  icon: Icon,
  variant,
  size,
  className,
}: BadgeSectionProps) => {
  return (
    <span className={BadgeSectionVariants({ variant, size, className })}>
      <div className="rounded-full bg-navy-900 p-2">
        <Icon size={18} className="text-white" />
      </div>
      {children}
    </span>
  );
};

export default BadgeSection;
