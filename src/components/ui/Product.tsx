/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import {
  useGetAllProductQuery,
  useDeleteProductMutation,
  useDeleteManyProductMutation,
} from "../../redux/features/product/productApi";
import { VariantProduct } from "./CreateVariant";
import toast from "react-hot-toast";
import { useState } from "react";
import { OrderNow } from "./OrderNow";
import { AddProduct } from "./AddProduct";
import { UpdateProduct } from "./UpdateProduct";

const TABLE_HEAD = [
  "IMAGE",
  "NAME",
  "CATEGORY",
  "BRAND",
  "PRICE",
  "QUANTITY",
  "CONDITION",
  "ACTION",
  "SELL",
  "CREATE VARIANT",
];

export function ProductTable() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [updateProduct, setUpdateProduct] = useState({});
  const [orderInfo, setOrderInfo] = useState("");
  const [deleteMany] = useDeleteManyProductMutation();
  const [deleteProductMutation] = useDeleteProductMutation();

  const data = useGetAllProductQuery({ name: "category", value: "PC 2" });

  const handleOrderId = (orderInfo: any) => {
    setOrderInfo(orderInfo);
  };
  const handleUpdateProduct = (product: any) => {
    setUpdateProduct(product);
  };

  // delete product operation
  const handleDeleteProduct = async (id: string) => {
    try {
      const result: any = await deleteProductMutation(id);

      if (result?.data?.success as boolean) {
        toast.success(result?.data?.message, {
          position: "bottom-center",
        });
      } else {
        toast.error("Product cannot deleted", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      return error;
    }
  };

  if (data?.isLoading) {
    return <>Loading...</>;
  }

  const handleCheckboxChange = async (id: string, checked: boolean) => {
    if (checked) {
      setSelectedIds((prevIds) => [...prevIds, id]);
    } else {
      setSelectedIds((prevIds) =>
        prevIds.filter((selectedId) => selectedId !== id)
      );
    }
  };

  const handleMultipleProductDelete = async () => {
    try {
      const result: any = await deleteMany(selectedIds);
      if (result?.data?.success as boolean) {
        toast.success(result?.data?.message, {
          position: "bottom-center",
        });
      } else {
        toast.error("Product cannot deleted", {
          position: "bottom-center",
        });
      }
    } catch (error) {
      toast.error("Product cannot deleted", {
        position: "bottom-center",
      });
    }
    setSelectedIds(() => []);
  };

  const currentPage = data?.data?.meta?.page;
  const totalPages = data?.data?.meta?.totalPages;
  const products = data?.data?.data;

  console.log(products);

  const filterItems = [
    {
      name: "category",
      items: [...new Set(products.map((item: any) => item?.category))],
    },
    {
      name: "brand",
      items: [...new Set(products.map((item: any) => item?.brand))],
    },
    {
      name: "compatibility",
      items: [...new Set(products.map((item: any) => item?.compatibility))],
    },
    {
      name: "condition",
      items: [...new Set(products.map((item: any) => item?.condition))],
    },
    {
      name: "color",
      items: [...new Set(products.map((item: any) => item?.color))],
    },
    {
      name: "size",
      items: [...new Set(products.map((item: any) => item?.size))],
    },
  ];

  const filter = filterItems.filter((item) => item.items.length > 1);

  return (
    <>
      {data?.data?.data.length > 0 ? (
        <>
          <div className="flex justify-between p-10 bg-[#f1f5f9]">
            <div className="flex items-center gap-2">
              <Popover
                placement="bottom"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <button className=" w-44  rounded-lg font-bold flex bg-[#6366f1] text-white hover:bg-orange-900 hover:border-orange-900 justify-between p-4">
                    Filter
                  </button>
                </PopoverHandler>

                <PopoverContent
                  placeholder={""}
                  className="p-1 flex flex-col gap-1 w-52"
                >
                  {filter.map((item: any, index: number) => (
                    <span key={index}>
                      <Popover
                        placement="right-start"
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <PopoverHandler>
                          <div className="text-xl pr-6 border p-1 cursor-pointer">
                            {item.name}
                          </div>
                        </PopoverHandler>

                        <PopoverContent
                          placeholder={""}
                          className="p-1 flex flex-col gap-1 w-52"
                        >
                          {item.items.map((items: any, i: number) => (
                            <>
                              <div
                                className="text-xl pr-6 border p-1 cursor-pointer"
                                key={i + "a"}
                              >
                                {items}
                              </div>
                            </>
                          ))}
                        </PopoverContent>
                      </Popover>
                    </span>
                  ))}
                </PopoverContent>
              </Popover>

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

              <AddProduct />
            </div>
          </div>
          <Card placeholder={""} className="">
            <CardHeader
              placeholder={""}
              floated={false}
              shadow={false}
              className="rounded-none"
            >
              <div className=" flex items-center justify-between px-6">
                <div className="font-bold text-xl">Product list</div>
              </div>
            </CardHeader>
            <CardBody placeholder={""} className=" px-8 ">
              <table className="mt-4 w-full min-w-max border table-auto text-left">
                <thead>
                  <tr className="w-4">
                    <td className="w-[16px] border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                      <div className="inline-flex items-center">
                        <Button
                          placeholder={""}
                          onClick={() => handleMultipleProductDelete()}
                          variant="outlined"
                          size="sm"
                          className="p-1"
                        >
                          Del
                        </Button>
                      </div>
                    </td>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={head}
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                      >
                        <Typography
                          placeholder={""}
                          variant="small"
                          color="blue-gray"
                          className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                        >
                          {head}{" "}
                          {index !== TABLE_HEAD.length - 1 && (
                            <ChevronUpDownIcon
                              strokeWidth={2}
                              className="h-4 w-4"
                            />
                          )}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.data?.map((product: any, index: number) => {
                    const isLast = index === data?.data?.data?.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex items-center gap-3 text-center w-[16px]">
                            <div className="relative  h-10">
                              <div className="inline-flex items-center">
                                <label
                                  className="relative flex items-center p-1 rounded-full cursor-pointer"
                                  htmlFor="customStyle"
                                >
                                  <input
                                    type="checkbox"
                                    checked={product.checked}
                                    className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
                                    id="customStyle"
                                    onChange={(
                                      ck: React.ChangeEvent<HTMLInputElement>
                                    ) =>
                                      handleCheckboxChange(
                                        product?._id,
                                        ck.currentTarget.checked
                                      )
                                    }
                                  />
                                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-3.5 w-3.5"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      stroke="currentColor"
                                      stroke-width="1"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd"
                                      ></path>
                                    </svg>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3 text-center">
                            <Avatar
                              className="border_sm w-14 h-14"
                              placeholder={""}
                              src={product?.product_image}
                              alt={product?.product_name}
                              size="sm"
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3 text-center">
                            {product?.product_name}
                          </div>
                        </td>

                        <td className={classes}>
                          <div className="flex items-center gap-3 text-center">
                            {product?.category}
                          </div>
                        </td>

                        <td className={classes}>
                          <div className="flex items-center gap-3 text-center">
                            {product?.brand}
                          </div>
                        </td>

                        <td className={classes}>
                          <div className="flex items-center gap-3 text-center">
                            {product?.price}
                          </div>
                        </td>

                        <td className={classes}>
                          <div className="flex items-center gap-3 text-center">
                            {product?.quantity}
                          </div>
                        </td>

                        <td className={classes}>
                          <div className="flex items-center gap-3 text-center">
                            {product?.condition}
                          </div>
                        </td>
                        {/* action  */}
                        <td className={classes}>
                          <div className="flex justify-center items-center g-4">
                            {/* view details for single product */}
                            <Tooltip
                              className="border border-[#0eb77a] bg-white text-[#0eb77a]"
                              content="VIEW"
                            >
                              <IconButton
                                placeholder={""}
                                variant="text"
                                className="h-10 w-6"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-4 h-4 text-[#0eb77a]"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                  />
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                  />
                                </svg>
                              </IconButton>
                            </Tooltip>
                            {/* edit product  */}
                            <button
                              onClick={() => handleUpdateProduct(product)}
                            >
                              <UpdateProduct product={updateProduct} />
                            </button>
                            {/* delete product  */}
                            <Tooltip
                              className="border border-[#e93548] bg-white text-[#e93548]"
                              content="DELETE"
                            >
                              <IconButton
                                onClick={() => {
                                  handleDeleteProduct(product._id);
                                }}
                                placeholder={""}
                                variant="text"
                                className="h-10 w-6"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  className="w-4 h-4 text-[#e93548]"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </IconButton>
                            </Tooltip>
                          </div>
                        </td>

                        <td
                          className={classes}
                          onClick={() => {
                            handleOrderId({
                              productID: product?._id,
                              quantity: product?.quantity,
                            });
                          }}
                        >
                          <OrderNow orderInfo={orderInfo} />
                        </td>
                        <td className={classes}>
                          <VariantProduct thisProduct={product} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
            <CardFooter
              placeholder={""}
              className="flex items-center justify-between border-t border-blue-gray-50 p-4"
            >
              <Typography
                placeholder={""}
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Page {currentPage} of {totalPages}
              </Typography>

              <div className="flex gap-2">
                <Button
                  placeholder={""}
                  onClick={() => handleMultipleProductDelete()}
                  variant="outlined"
                  size="sm"
                >
                  Delete
                </Button>
                <Button placeholder={""} variant="outlined" size="sm">
                  Previous
                </Button>
                <Button
                  placeholder={""}
                  variant="outlined"
                  onClick={currentPage + 1}
                  size="sm"
                >
                  Next
                </Button>
              </div>
            </CardFooter>
          </Card>
        </>
      ) : (
        <div className=" w-full flex items-center justify-center h-screen">
          <div>
            <h1 className="text-center -mt-10 mb-10 text-2xl text-red-500">
              Product no added
            </h1>
            <AddProduct />
          </div>
        </div>
      )}
    </>
  );
}
