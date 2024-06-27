import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
import { useRegistrationMutation } from "../redux/features/user/userApi";

export function SignUp() {
  const [registration] = useRegistrationMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      user_name: "Omar Faruk",
      user_email: "qteam@g.com",
      user_password: "admin123",
    },
  });

  const onSubmit = async (inputData: FieldValues) => {
    const userInfo = {
      user_name: inputData.user_name,
      user_email: inputData.user_email,
      user_password: inputData.user_password,
    };

    const result = await registration(userInfo).unwrap();
    console.log(result, "file name : SignIn line number : +-35");
  };

  return (
    <div className="w-full mx-auto flex justify-center items-center min-h-[100vh]">
      <Card placeholder={""} className="w-96">
        <CardHeader
          placeholder={""}
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography placeholder={""} variant="h3" color="white">
            Registration
          </Typography>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody placeholder={""} className="flex flex-col gap-4">
            <Input
              crossOrigin={""}
              label="Full Name"
              id="user_name"
              size="lg"
              {...register("user_name")}
            />

            <Input
              crossOrigin={""}
              label="Email"
              id="user_email"
              size="lg"
              {...register("user_email")}
            />

            <Input
              crossOrigin={""}
              label="Password"
              id="user_password"
              {...register("user_password")}
              size="lg"
            />
          </CardBody>
          <CardFooter placeholder={""} className="pt-0">
            <Button placeholder={""} type="submit" variant="gradient" fullWidth>
              Registration
            </Button>
            <Typography
              placeholder={""}
              variant="small"
              className="mt-6 flex justify-center"
            >
              Don&apos;t have an account?
              <Typography
                placeholder={""}
                as="a"
                href="/sign-in"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign in
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
