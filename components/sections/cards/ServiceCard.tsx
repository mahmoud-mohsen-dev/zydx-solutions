import Image from "next/image";

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div className="flex flex-col items-center gap-3.5 py-4 text-center">
      <Image alt={icon.alt} src={icon.src} width={64} height={64} />
      <h4 className="font-poppins text-fluid-sm text-foreground font-semibold">
        {title}
      </h4>
      <p className="font-poppins text-fluid-xs text-secondary-foreground font-normal">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;
