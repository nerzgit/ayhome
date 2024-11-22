export default function Home() {
  return (
    <main className="pt-[44px]">
      <div className="flex flex-col justify-center w-full py-[80px] bg-grey-100/70">
        <div className="my-[120px] grid grid-cols-1 gap-[80px] max-w-[800px] m-auto text-xl text-black break-all">
          <p className="text-xxl text-black-300 font-bold text-center">
            Hello.
            <p className="text-md text-black font-bold text-center pt-[20px]">
              Welcome to the Ay.
            </p>
          </p>
          <p className="text-sm text-black-300 font-bold text-left">
            We develop AyEngine and AyStudio, as well as various other useful
            tools.We create small tools that help streamline daily tasks or make
            work and life a little easier. These include programs like automatic
            software launchers for when we arrive at the office, or tools that
            automatically collect internal knowledge. Occasionally, we also use
            GL to develop games or graphic software. It also happens that I am
            good at design.
          </p>
        </div>
      </div>
    </main>
  );
}
