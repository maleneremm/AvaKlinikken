interface AboutProps {
  imageUrl?: string;
  name?: string;
  description?: string;
}

export const About = ({ imageUrl, name, description }: AboutProps) => {
  return (
    <article className="flex flex-col p-4 gap-4">
      <img className="w-100 h-132.5 object-cover rounded-md" src={imageUrl} alt={`Bilde av ansatt ${name}`} />
      <h3 className="text-xl font-bold">{name}</h3>
      <p>
      {description}
      </p>
    </article>
  );
};  
