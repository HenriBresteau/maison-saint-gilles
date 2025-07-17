import { LucideIcon } from "lucide-react";

interface CardFeatureProps {
  title: string;
  icon: LucideIcon;
  description: string;
}

const CardFeature = ({ title, icon: Icon, description }: CardFeatureProps) => {
  return (
    <div className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-navy-200 hover:bg-coral-50 hover:shadow-lg">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-coral-500 transition-transform duration-300 group-hover:-translate-y-2">
        <Icon size={24} className="text-white" />
      </div>
      <h3 className="font-montserrat mb-4 text-xl font-semibold text-navy-900">
        {title}
      </h3>
      <p className="text-center leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default CardFeature;
