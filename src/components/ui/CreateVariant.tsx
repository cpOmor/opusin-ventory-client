/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddProductMutation } from "../../redux/features/product/productApi";
import { TAddProduct } from "../../redux/features/product/productType";

export function VariantProduct(product: any) {
  const { thisProduct } = product;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const user = useAppSelector(selectCurrentUser);
  const [addProduct] = useAddProductMutation();
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (input: FieldValues) => {
    const payload: TAddProduct = {
      user_id: user?.id,
      product_name: input.product_name,
      product_image: input.product_image,
      quantity: parseInt(input.quantity),
      color: input.color,
      size: input.size,
      category: input.category,
      brand: input.brand,
      compatibility: input.compatibility,
      price: parseInt(input.price),
      interface: input.interface,
      condition: input.condition,
      capacity: parseInt(input.capacity),
    };

    try {
      const result = await addProduct(payload).unwrap();

      toast.success(result?.message, {
        position: "bottom-center",
      });
    } catch (error: any) {
      toast.error(error?.data?.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <Button placeholder={""} onClick={handleOpen}>
        CREATE VARIANT
      </Button>
      <Dialog
        placeholder={""}
        size="xs"
        open={open}
        handler={handleOpen}
        className="relative m-4 rounded-lg text-blue-gray-500 antialiased
         font-sans text-base font-light leading-relaxed w-full md:w-full 
         lg:w-full 2xl:w-1/4 min-w-full md:min-w-full lg:min-w-full 
         2xl:min-w-[70%] max-w-full md:max-w-full 2xl:max-w-[70%] bg-transparent
         border border-red-500 shadow-none lg:max-w-full xl:max-w-full"
      >
        <Card placeholder={""} className="mx-auto   max-w-full">
          <form className="mt-8 mb-2 w-full" onSubmit={handleSubmit(onSubmit)}>
            <CardBody placeholder={""} className="flex flex-col gap-4">
              <Typography
                placeholder={""}
                variant="h5"
                color="blue-gray"
                className="text-xl"
              >
                Copy and create a new product
              </Typography>

              <div className="mb-1 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Product Name
                    </Typography>

                    <Input
                      id="product_name"
                      {...register("product_name")}
                      defaultValue={thisProduct?.product_name}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Image
                    </Typography>

                    <Input
                      id="product_image"
                      {...register("product_image")}
                      defaultValue={thisProduct?.product_image}
                      type="text"
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Quantity
                    </Typography>

                    <Input
                      id="quantity"
                      {...register("quantity")}
                      defaultValue={thisProduct?.quantity}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Color separate coma (",")
                    </Typography>

                    <Input
                      id="color"
                      {...register("color")}
                      defaultValue={thisProduct?.color}
                      crossOrigin={""}
                      placeholder="red, black, green, blue"
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Size separate coma (",")
                    </Typography>

                    <Input
                      id="size"
                      {...register("size")}
                      defaultValue={thisProduct?.size}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Category
                    </Typography>

                    <Input
                      id="category"
                      {...register("category")}
                      defaultValue={thisProduct?.category}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
                {/*  */}
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Capacity
                    </Typography>

                    <Input
                      id="capacity"
                      {...register("capacity")}
                      defaultValue={thisProduct?.capacity}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Condition
                    </Typography>

                    <Input
                      id="condition"
                      {...register("condition")}
                      defaultValue={thisProduct?.condition}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Brand
                    </Typography>

                    <Input
                      id="brand"
                      {...register("brand")}
                      defaultValue={thisProduct?.brand}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Compatibility
                    </Typography>

                    <Input
                      id="compatibility"
                      {...register("compatibility")}
                      defaultValue={thisProduct?.compatibility}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>

                {/*  */}

                <div className="flex gap-4">
                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Price
                    </Typography>

                    <Input
                      id="price"
                      {...register("price")}
                      defaultValue={thisProduct?.price}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <div className="w-1/2">
                    <Typography
                      placeholder={""}
                      variant="h6"
                      color="blue-gray"
                      className=""
                    >
                      Interface
                    </Typography>

                    <Input
                      id="interface"
                      {...register("interface")}
                      defaultValue={thisProduct?.interface}
                      crossOrigin={""}
                      size="lg"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
                {/*  */}
              </div>
            </CardBody>
            <CardFooter placeholder={""} className="pt-0">
              <Button
                type="submit"
                placeholder={""}
                variant="gradient"
                onClick={handleOpen}
                fullWidth
              >
                CREATE product
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}
