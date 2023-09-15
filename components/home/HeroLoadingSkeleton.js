export default function HeroLoadingSkeleton() {
  return (
    <section className="container-custom">
      <div className="py-2 flex items-center justify-between skeleton">
        <div className="bg-gray-300 w-[35px] rounded-full h-[35px]"></div>
        <div className="bg-gray-300  w-[250px] rounded-lg h-[34px]"></div>
      </div>

      <div className="container-custom bg-gray-300 w-[100%] h-[65vh] mt-2 flex flex-col gap-4 skeleton">
        <div className="bg-gray-200 w-[315px] h-[25px] mt-[8rem]"></div>
        <div className="bg-gray-200 w-[295px] h-[45px]"></div>
        <div className="bg-gray-200 w-[210px] h-[45px]"></div>
      </div>
    </section>
  );
}
