import { Button } from "../common/Button";
import { bookAppointment } from "../../utils/utils";

interface InfoCardProps {
  imageUrl?: string;
  title?: string;
  description?: Array<string>;
  enableButton?: boolean;
}

export const InfoCard = ({
  imageUrl,
  title,
  description,
  enableButton,
}: InfoCardProps) => {
  return (
    <article className="flex flex-col gap-4 pt-4 pb-4 lg:pt-8 lg:pb-8 items-center md:flex-row md:gap-12 md:justify-center">
      {imageUrl && (
        <img
          className="rounded-md md:w-1/3"
          src={imageUrl}
          alt={"Bilde av " + title}
        />
      )}
      <div
        className={`flex flex-col justify-between items-center w-full md:items-start gap-4 md:gap-8 md:w-1/3`}
      >
        <h3 className="text-xl md:text-3xl">{title}</h3>
        <ul
          className={`w-full items-start mt-2 flex flex-col gap-2 ${imageUrl ? "" : "items-start px-8"}`}
        >
          {description?.map((item, index) => (
            <li className="text-start md:text-md lg:text-xl" key={index}>
              {item}
            </li>
          ))}
        </ul>
        {enableButton && (
          <Button
            className="border border-(--primary-border-color) bg-(--primary-button-color) text-white p-2 md:text-xl rounded-md transition-all duration-200 ease-out hover:brightness-110 hover:shadow-md active:brightness-95 active:scale-[0.97] focus:outline-none  focus:ring-2 focus:ring-(--primary-border-color)/40"
            onClick={bookAppointment}
          >
            Book behandling
          </Button>
        )}
      </div>
    </article>
  );
};
