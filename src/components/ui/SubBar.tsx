/* eslint-disable @typescript-eslint/no-explicit-any */
import {
 
  Select,
  Option,
} from "@material-tailwind/react";

export const SubBarComponent = (filterInfo : any) => {
  const { filter, setFilter } = filterInfo
  return (
    <>
    {/* <FilterItem/> */}
      <div className="flex justify-between p-10 bg-[#f1f5f9]">
        <div className="flex items-center gap-2">
          <button className="border bg-white after:outlet-none rounded-md font-bold flex gap-3 hover:bg-[#6366f1] hover:text-white text-[#6366f1]">
            Filter
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <div className="w-72 h-14 pt-2 outline-none  border-none">
              <Select
                placeholder={""}
                value={filter}
                onVolumeChange={setFilter}
                className="outline-none border-none text-xl  text-center h-14"
              >
                <Option className="outlet-none border-none">
                  Material Tailwind HTML
                </Option>
                <Option value={filter}>Material Tailwind React</Option>
                <Option value={filter}>Material Tailwind Vue</Option>
                <Option value={filter}>Material Tailwind Angular</Option>
                <Option value={filter}>Material Tailwind Svelte</Option>
              </Select>
            </div>
          </button>
          <div className="px-4 py-4  bg-white  rounded-md  font-bold flex gap-3">
            <input
              className="outlet-none font-semibold focus:outline-none "
              placeholder="Search a product"
            />
            <button>
              <svg
                className="w-6 h-6 text-[#6366f1]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="./sells-history">
            <button className="px-4 py-4 border bg-white border-[#03b288] rounded-md font-bold flex gap-3 hover:bg-[#03b288] hover:text-white text-[#03b288]">
              Sales History
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                />
              </svg>
            </button>
          </a>

          
        </div>
      </div>
    </>
  );
};
