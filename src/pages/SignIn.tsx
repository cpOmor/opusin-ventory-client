import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { TUser } from "../redux/features/auth/authType";
import {  setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../Utils/token";

export function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "qteam@g.com",
      password: "admin123",
    },
  });

  const onSubmit = async (inputData: FieldValues) => {
    const userInfo = {
      user_email: inputData.email,
      password: inputData.password,
    };
    const result = await login(userInfo).unwrap();
    const token = result.data.accessToken;
    const user = verifyToken(token) as TUser;
    dispatch(setUser({ user, token: result.data.accessToken }));
    
    navigate("/");
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
            Sign In
          </Typography>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardBody placeholder={""} className="flex flex-col gap-4">
            <Input
              crossOrigin={""}
              label="Email"
              id="email"
              size="lg"
              {...register("email")}
            />
            <Input
              crossOrigin={""}
              label="Password"
              id="password"
              {...register("password")}
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox crossOrigin={""} label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter placeholder={""} className="pt-0">
            <Button placeholder={""} type="submit" variant="gradient" fullWidth>
              Sign In
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
                href="/sign-up"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
