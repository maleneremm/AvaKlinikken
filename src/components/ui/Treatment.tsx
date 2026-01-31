import { Button } from "../common/Button";

interface TreatmentProps {
  imageUrl?: string;
  title?: string;
  description?: Array<string>;
}

export const Treatment = ({ imageUrl, title, description }: TreatmentProps) => {
  return (
    <article className="flex flex-col gap-4 m-4 items-center">
      <div>
        <img className="rounded-md" src={imageUrl} alt={title} />
      </div>
      <h3 className="text-2xl">{title}</h3>
      <ul className="w-fit items-center">
        {description?.map((item, index) => (
          <li className="font-bold list-[square] text-start" key={index}>
            {item}
          </li>
        ))}
      </ul>
      <Button
        className="border border-(--primary-border-color) bg-(--primary-button-color) text-white p-2 rounded-md"
        onClick={() => {}}
      >
        Book behandling
      </Button>
    </article>
  );
};
