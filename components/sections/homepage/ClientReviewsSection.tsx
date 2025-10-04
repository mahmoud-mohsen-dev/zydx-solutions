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
      name: "Salwa Alaa",
      role: "Designer",
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
      name: "Salwa Alaa",
      role: "Designer",
    },
    comment:
      "They truly understood our needs and provided innovative solutions that helped us grow our business faster than expected.",
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
      <div className="relative w-full overflow-x-hidden pt-[43px] pb-25">
        <div className="animate-infinite-scroll flex gap-8">
          {doubledReviews.map((review) => (
            <div
              key={review.id + Math.random()} // unique key since we duplicate
              className="w-[80%] flex-shrink-0 sm:w-1/2 lg:w-1/3"
            >
              <ClientReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientReviewsSection;
