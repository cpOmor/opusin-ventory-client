/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/features/product/productApi";
import { FieldValues, useForm } from "react-hook-form";
import { TAddProduct } from "../../redux/features/product/productType";

export const EditProduct = ({ product_id }: { product_id: string }) => {
  const [updateProduct] = useUpdateProductMutation();
  const singleProduct = useGetSingleProductQuery(product_id as string);

  const data = singleProduct?.data?.data;

  const onSubmit = async (input: FieldValues) => {
    const payload: TAddProduct = {
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

    const info = { id: product_id, payload };
    try {
      const result = await updateProduct(info).unwrap();
      if (result?.success) {
        console.log("input");
      }
    } catch (error) {
      return error;
    }
  };

  const { register, handleSubmit } = useForm({
    defaultValues: {
      product_name: data?.product_name,
      product_image: data?.product_image,
      quantity: data?.quantity,
      color: data?.color,
      size: data?.size,
      category: data?.category,
      brand: data?.brand,
      compatibility: data?.compatibility,
      price: data?.price,
      interface: data?.interface,
      condition: data?.condition,
      capacity: data?.capacity,
    },
  });

  if (singleProduct.isLoading) {
    <>Loading...</>;
  }

  return (
    <Card placeholder={""} color="transparent" shadow={false}>
      <Typography placeholder={""} variant="h4" color="blue-gray">
        Edit product
      </Typography>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 mb-2 w-full max-w-screen-lg"
      >
        <div className="mb-1 flex flex-col gap-6">
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Product Name
          </Typography>

          <Input
            id="product_name"
            {...register("product_name")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Image
          </Typography>

          <Input
            id="product_image"
            {...register("product_image")}
            type="text"
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Quantity
          </Typography>

          <Input
            id="quantity"
            {...register("quantity")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Color (add multiple colors to the separate coma ",")
          </Typography>

          <Input
            id="color"
            {...register("color")}
            crossOrigin={""}
            placeholder="red, black, green, blue"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Size (add multiple Sizes to the separate coma ",")
          </Typography>

          <Input
            id="size"
            {...register("size")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Category
          </Typography>

          <Input
            id="category"
            {...register("category")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Capacity
          </Typography>

          <Input
            id="capacity"
            {...register("capacity")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Condition
          </Typography>

          <Input
            id="condition"
            {...register("condition")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Brand
          </Typography>

          <Input
            id="brand"
            {...register("brand")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Compatibility
          </Typography>

          <Input
            id="compatibility"
            {...register("compatibility")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Price
          </Typography>

          <Input
            id="price"
            {...register("price")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Typography
            placeholder={""}
            variant="h6"
            color="blue-gray"
            className="-mb-3"
          >
            Interface
          </Typography>

          <Input
            id="interface"
            {...register("interface")}
            crossOrigin={""}
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />

          <Button type="submit" placeholder={""} className="mt-6" fullWidth>
            Update
          </Button>
        </div>
      </form>
    </Card>
  );
};
