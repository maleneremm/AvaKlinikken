interface AboutProps {
  imageUrl?: string;
  name?: string;
  description?: string;
  title?: string;
}

export const About = ({ imageUrl, name, description, title }: AboutProps) => {
  return (
    <article className="flex flex-col p-4 lg:p-8 gap-4 md:gap-8 md:items-center max-w-md">
      <img
        className="w-100 h-132.5 object-cover rounded-md"
        src={imageUrl}
        alt={`Bilde av ansatt ${name}`}
      />
      <div className="flex flex-col items-start gap-2 bg-amber-50 rounded-md md:border-(--primary-border-color) p-4 w-full md:grow">
        <h3 className="text-2xl lg:text-3xl">{name}</h3>
        <div className="text-md font-semibold text-stone-600 lg:text-lg">{title}</div>
        <p className="text-start lg:text-lg">{description}</p>
      </div>
    </article>
  );
};
