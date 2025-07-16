import { cva, VariantProps } from 'class-variance-authority';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

const buttonVariants = cva(
  "flex w-fit items-center gap-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl",
  {
    variants: {
      variant: {
        filled:
          "bg-navy-900 text-white shadow-lg hover:bg-navy-800 hover:shadow-xl",
        ghost:
          "bg-slate-200 text-navy-900 border-2 border-navy-900 hover:bg-navy-900 hover:text-white",
        outline:
          "bg-white text-navy-900 border-2 border-slate-200 hover:bg-slate-50 hover:border-navy-900",
        coral:
          "bg-coral-500 text-white shadow-lg hover:bg-coral-600 hover:shadow-xl",
      },
      size: {
        small: "px-4 py-2 text-sm",
        medium: "px-6 py-3 text-base",
        large: "px-8 py-4 text-lg",
        xl: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "medium",
    },
  },
);

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  title: string;
  url: string;
  icon?: LucideIcon;
  className?: string;
}

const Button = ({
  title,
  url,
  icon: Icon,
  variant,
  size,
  className,
}: ButtonProps) => {
  return (
    <Link href={url} className={buttonVariants({ variant, size, className })}>
      {title}
      {Icon && <Icon size={16} />}
    </Link>
  );
};

export default Button;
