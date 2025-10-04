import BusinessArticleCard from "../cards/BusinessArticleCard";

function BusinessArticles() {
  return (
    <section className="font-poppins container">
      <div className="mx-auto max-w-[594px] space-y-4 text-center">
        <h2 className="text-foreground text-fluid-max24 mt-7.5 font-semibold">
          Business Articles
        </h2>
        <p className="text-fluid-xs text-secondary-foreground font-normal text-pretty">
          Technology is rapidly transforming how we live and interact, with
          advances in AI, automation, and virtual reality reshaping daily life.
        </p>
      </div>

      <div className="mt-8 mb-25 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <BusinessArticleCard
          key={1}
          image={{
            src: "/sections/homepage/temp-business-article-card.png",
            alt: "Business article image",
          }}
          title={"Business articles"}
          description={
            "The Toyota Corolla 2024 combines reliability with modern design. Equipped with a fuel-efficient engine, "
          }
          link={"/"}
        />
        <BusinessArticleCard
          key={2}
          image={{
            src: "/sections/homepage/temp-business-article-card.png",
            alt: "Business article image",
          }}
          title={"Business articles"}
          description={
            "The Toyota Corolla 2024 combines reliability with modern design. Equipped with a fuel-efficient engine, "
          }
          link={"/"}
        />
        <BusinessArticleCard
          key={3}
          image={{
            src: "/sections/homepage/temp-business-article-card.png",
            alt: "Business article image",
          }}
          title={"Business articles"}
          description={
            "The Toyota Corolla 2024 combines reliability with modern design. Equipped with a fuel-efficient engine, "
          }
          link={"/"}
        />
        <BusinessArticleCard
          key={4}
          image={{
            src: "/sections/homepage/temp-business-article-card.png",
            alt: "Business article image",
          }}
          title={"Business articles"}
          description={
            "The Toyota Corolla 2024 combines reliability with modern design. Equipped with a fuel-efficient engine, "
          }
          link={"/"}
        />
      </div>
    </section>
  );
}

export default BusinessArticles;
