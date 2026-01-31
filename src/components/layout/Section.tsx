interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className = "" }: SectionProps) => {
  return (
    <section className={`flex flex-col gap-8 ${className}`}>{children}</section>
  );
};

export default Section;
