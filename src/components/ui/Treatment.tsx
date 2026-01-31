import { Button } from "../common/Button";
import { bookAppointment } from "../../utils/utils";

interface TreatmentProps {
  imageUrl?: string;
  title?: string;
  description?: Array<string>;
}

export const Treatment = ({ imageUrl, title, description }: TreatmentProps) => {
  return (
    <article className="flex flex-col gap-4 pt-4 pb-4 lg:pt-8 lg:pb-8 items-center md:flex-row md:gap-12 md:justify-center">
      <img className="rounded-md md:w-1/3" src={imageUrl} alt={title} />

      <div className="flex flex-col justify-between items-center md:items-start gap-4 md:gap-8 md:w-1/3">
        <h3 className="text-2xl md:text-4xl">{title}</h3>
        <ul className="w-fit items-start mt-2 flex flex-col gap-2">
          {description?.map((item, index) => (
            <li
              className="font-bold list-[square] text-start md:text-xl"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <Button
          className="border border-(--primary-border-color) bg-(--primary-button-color) text-white p-2 rounded-md md:text-xl"
          onClick={bookAppointment}
        >
          Book behandling
        </Button>
      </div>
    </article>
  );
};
