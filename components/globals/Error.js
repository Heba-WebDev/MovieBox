import Link from "next/link";

export default function Error() {
  return (
    <div class="lg:px-24 lg:py-24 pb-[8rem] md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="flex flex-col gap-8">
          <h1 class=" text-gray-800 font-bold text-2xl">
            Looks like you have found the doorway to the great nothing
          </h1>
          <p class=" text-gray-800">
            Sorry about that! Please visit our hompage to get where you need to
            go.
          </p>
          <Link
            href="/"
            class="w-full border rounded md py-4 px-8 text-center bg-red-600 text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
          >
            Take me there!
          </Link>
        </div>
      </div>
    </div>
  );
}
