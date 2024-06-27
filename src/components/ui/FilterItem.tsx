/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
export function FilterItem(filters: any) {
  const { filter } = filters;

  console.log(filter, "file name : FilterItem line number : +-267");

  <Popover
    animate={{
      mount: { scale: 1, y: 0 },
      unmount: { scale: 0, y: 25 },
    }}
  >
    <PopoverHandler>
      <Button placeholder={""}>Popover</Button>
    </PopoverHandler>
    {filter.map((popover: any, i: number) => {
      <PopoverContent key={i} placeholder={""}>
        {popover.name}
      </PopoverContent>;
    })}
  </Popover>;
}
