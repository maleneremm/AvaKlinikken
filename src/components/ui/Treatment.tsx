import { Button } from "../common/Button";

interface TreatmentProps {
  imageUrl?: string;
  title?: string;
  description?: string;

}

export const Treatment = ({imageUrl, title, description} : TreatmentProps) => {
  return (
    <article className="flex flex-col gap-4 m-4">
        <h3 className="text-2xl">{title}</h3>
      <div>
        <img className="rounded-md" src={imageUrl} alt={title} />
      </div>
        <p>{description}</p>
        <Button className="border bg-brown-500 text-white p-2 rounded-md" onClick={() => {}}>BOOK BEHANDLING</Button>
    </article>
  )
}
