/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useCreateOrderMutation } from "../../redux/features/order/orderApi";
import { FieldValues, useForm } from "react-hook-form";
import { TSellInfo } from "../../redux/features/order/orderType";
import toast from "react-hot-toast";
import { useUpdateProductMutation } from "../../redux/features/product/productApi";

export function OrderNow(order: any) {
  const { orderInfo } = order;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const user = useAppSelector(selectCurrentUser);
  const [updateProduct] = useUpdateProductMutation();
  const [createOrder] = useCreateOrderMutation();
  const { register, handleSubmit } = useForm({});

  const onSubmit = async (input: FieldValues) => {
    const isMach = parseInt(input.quantity) <= parseInt(orderInfo.quantity);
    // implement a back end
    if (parseInt(input.quantity) === 0) {
      toast.error(
        `Can't possible by a  ${input.quantity} product
      `,
        {
          position: "bottom-center",
        }
      );
      return;
    }

    // implement a back end
    if (!isMach) {
      toast.error(
        `We don't have enough products, buy max ${orderInfo.quantity} products
      `,
        {
          position: "bottom-center",
        }
      );
      return;
    }

    const correctQuantity =
      parseInt(orderInfo.quantity) - parseInt(input.quantity);

    const info = {
      id: orderInfo?.productID,
      payload: { quantity: correctQuantity },
    };
    try {
      const result = await updateProduct(info).unwrap();
      if (result?.success) {
        console.log("input");
      }
    } catch (error) {
      return error;
    }

    const payload: TSellInfo = {
      product_id: orderInfo?.productID,
      user_id: user?.id,
      buyerName: input.buyerName,
      quantity: parseInt(input.quantity),
      date: input.date,
    };

    try {
      const result = await createOrder(payload).unwrap();
      toast.success(result?.message, {
        position: "bottom-center",
      });
    } catch (error : any) {
      toast.error(error?.data?.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <Button placeholder={""} onClick={handleOpen}>
        Order
      </Button>
      <Dialog
        placeholder={""}
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card placeholder={""} className="mx-auto w-full max-w-[24rem]">
          <form
            className="mt-8 mb-2 w-full max-w-screen-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <CardBody placeholder={""} className="flex flex-col gap-4">
              <Typography placeholder={""} variant="h4" color="blue-gray">
                Create a order
              </Typography>

              <div className="mb-1 flex flex-col gap-6">
                <Input
                  id="buyerName"
                  {...register("buyerName")}
                  crossOrigin={"buyerName"}
                  size="lg"
                  placeholder="e.g Omar Faruk"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />

                <Input
                  id="quantity"
                  {...register("quantity")}
                  crossOrigin={""}
                  size="lg"
                  placeholder="e.g 5"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />

                <Input
                  id="date"
                  {...register("date")}
                  type="date"
                  crossOrigin={"date"}
                  size="lg"
                  placeholder="e.g dd-MM-yyyy"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                {/* <Button
                  type="submit"
                  placeholder={""}
                  className="mt-6"
                  fullWidth
                >
                  submit
                </Button> */}
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
                Order
              </Button>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
}
