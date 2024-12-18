import Image from "next/image";

function Dashboard() {
  return (
    <div className="p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full">
        <div className="w-full min-w-[280px] rounded bg-[#FFFFFF] p-4 m-2">
          <div className="flex items-center justify-center rounded-full h-[90px] w-[90px] bg-[#ff9c55]">
            <Image
              src={"/site-ui-assets/dollar-sign-solid.svg"}
              height={25}
              width={25}
              alt=""
            />
          </div>
          <h1 className="text-5xl font-bold mt-8 mb-2">KES120.0K</h1>
          <p className="text-base font-medium text-[#515151]">Total Profit</p>
        </div>
        <div className="w-full min-w-[280px] rounded bg-[#FFFFFF] p-4 m-2">
          <div className="flex items-center justify-center rounded-full h-[90px] w-[90px] bg-[#8155ff]">
            <Image
              src={"/site-ui-assets/box-open-solid.svg"}
              height={40}
              width={40}
              alt=""
            />
          </div>
          <h1 className="text-5xl font-bold mt-8 mb-2">300</h1>
          <p className="text-base font-medium text-[#515151]">Total Products</p>
        </div>
        <div className="w-full min-w-[280px] rounded bg-[#FFFFFF] p-4 m-2">
          <div className="flex items-center justify-center rounded-full h-[90px] w-[90px] bg-[#18bfff]">
            <Image
              src={"/site-ui-assets/dolly-solid.svg"}
              height={40}
              width={40}
              alt=""
            />
          </div>
          <h1 className="text-5xl font-bold mt-8 mb-2">10</h1>
          <p className="text-base font-medium text-[#515151]">Total Orders</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
