interface AboutProps {
  imageUrl?: string;
  name?: string;
  description?: string;
  title?: string;
}

export const About = ({ imageUrl, name, description, title }: AboutProps) => {
  return (
    <article className="flex flex-col p-4 lg:p-8 gap-4 md:gap-12 md:items-center max-w-md">
      <img
        className="w-100 h-132.5 object-cover rounded-md"
        src={imageUrl}
        alt={`Bilde av ansatt ${name}`}
      />
      <div className="flex flex-col items-start gap-2 border md:border-(--primary-border-color) p-4 w-full md:grow">
        <h3 className="text-xl font-bold">{name}</h3>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-start">{description}</p>
      </div>
    </article>
  );
};
