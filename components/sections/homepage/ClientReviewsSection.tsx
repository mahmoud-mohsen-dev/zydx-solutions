import ClientReviewCard from "../cards/ClientReviewCard";

const reviews = [
  {
    id: 1,
    user: {
      profileImg: {
        src: "/sections/homepage/temp-user-avatar-photo.png",
        alt: "user 1 avatar photo",
      },
      name: "Salwa Alaa",
      role: "Designer",
    },
    comment:
      "They truly understood our needs and provided innovative solutions that helped us grow our business faster than expected.",
  },
  {
    id: 2,
    user: {
      profileImg: {
        src: "/sections/homepage/temp-user-avatar-photo.png",
        alt: "user 1 avatar photo",
      },
      name: "Mahmoud Mohsen",
      role: "Developer",
    },
    comment:
      "They truly understood our needs and provided innovative solutions that helped us grow our business faster than expected.",
  },
  {
    id: 3,
    user: {
      profileImg: {
        src: "/sections/homepage/temp-user-avatar-photo.png",
        alt: "user 1 avatar photo",
      },
      name: "Mohamed Fathy",
      role: "Developer",
    },
    comment:
      "They truly understood our needs and provided innovative solutions that helped us grow our business faster than expected.",
  },
];

function ClientReviewsSection() {
  // Duplicate reviews to ensure seamless infinite loop
  const doubledReviews = [...reviews, ...reviews];

  return (
    <section className="font-poppins pt-25">
      <h2 className="text-foreground text-fluid-max24 mt-7.5 text-center font-semibold">
        What Our Clients Say
      </h2>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden pt-[43px] pb-25">
        <ul className="animate-infinite-scroll flex w-fit gap-8">
          {doubledReviews.map((review) => (
            <li
              key={review.id + Math.random()} // unique key since we duplicate
              className={`w-[256px] flex-shrink-0 select-none sm:w-[384px] md:w-[522px]`}
            >
              <ClientReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ClientReviewsSection;
