import { cva, VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

const BadgeVariants = cva(
  "inline-flex items-center w-fit gap-2 rounded-full font-medium transition-all duration-300 shadow",
  {
    variants: {
      variant: {
        default: "bg-slate-100 text-slate-700 border border-slate-200",
        primary: "bg-navy-100 text-navy-900 border border-navy-200",
        coral: "bg-coral-100 text-coral-900 border border-coral-200",
        success: "bg-green-100 text-green-900 border border-green-200",
        ghost: "bg-transparent text-slate-600 border border-slate-300",
        dot: "bg-slate-100 text-slate-700 border border-slate-200", // Avec dot animé
      },
      size: {
        small: "px-3 py-1 text-xs",
        medium: "px-4 py-2 text-sm",
        large: "px-5 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  },
);

interface BadgeProps extends VariantProps<typeof BadgeVariants> {
  children: ReactNode;
  icon?: LucideIcon;
  showDot?: boolean;
  className?: string;
}

const Badge = ({
  children,
  showDot,
  icon: Icon,
  variant,
  size,
  className,
}: BadgeProps) => {
  return (
    <span className={BadgeVariants({ variant, size, className })}>
      {showDot && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>
      )}
      {Icon && <Icon size={16} className="animate-pulse" />}
      {children}
    </span>
  );
};

export default Badge;
