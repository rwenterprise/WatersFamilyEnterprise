// app/components/CompanyCard.tsx
interface CardProps {
  title: string;
  description: string;
  linkUrl: string;
  buttonText?: string;
}

export default function CompanyCard({ title, description, linkUrl, buttonText = "Learn More →" }: CardProps) {
  return (
    <div className="bg-[#16191E] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 p-8 rounded-none flex flex-col justify-between group">
      <div>
        {/* Placeholder image aspect box */}
        <div className="w-full h-48 bg-black/40 border border-white/5 mb-6 flex items-center justify-center text-xs text-gray-500">
          [ Photo Placeholder ]
        </div>
        <h3 className="text-xl font-medium tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mt-3 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-8">
        <a 
          href={linkUrl} 
          className="inline-block border border-[#D4AF37] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}
