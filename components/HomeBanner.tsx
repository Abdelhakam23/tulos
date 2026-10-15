import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <Title className="text-3xl md:text-4xl uppercase text-center">
        best clothing collection
      </Title>
      <p className="text-sm text-lightColor/80 max-w-120 text-center font-medium ">
        Find everthing you need to look and feel your best, and shop the latest
        men&apos;s fashion and lifestyle products
      </p>
    </div>
  );
};

export default HomeBanner;
