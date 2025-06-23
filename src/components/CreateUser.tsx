import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import type { User } from "../models/user.model";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, MainState } from "../app/store";
import { saveUser } from "../features/userSlice";
import { useEffect } from "react";

const CreateUser = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();
    const userData = useSelector((data: MainState) => data.user);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<User>();

    useEffect(() => {
        if (location.pathname === '/update') {
            reset(userData);
        }
    }, []);

    const onSubmitClick = (data: User) => {
        dispatch(saveUser(data));
        sessionStorage.setItem('currentMode', location.pathname);
        navigate("/review");
    };

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center gap-5 ">
                <Button className="w-[15%]" type="button" variant="outlined" onClick={() => { navigate('/') }}>Back to Grid</Button>

                <form className="w-[60%] flex flex-col items-center border border-black rounded-lg p-5 gap-5"
                    onSubmit={handleSubmit(onSubmitClick)}>
                    <TextField
                        className="w-[50%]"
                        {...register("name", {
                            required: "Name is Required",
                        })}
                        label="name"
                        variant="outlined" />

                    <span className="text-red-500">
                        {errors && errors.name ? errors.name.message : ""}
                    </span>

                    <TextField
                        className="w-[50%]"
                        {...register("email", {
                            required: "Email is Required",
                        })}
                        label="email"
                        variant="outlined" />

                    <span className="text-red-500">
                        {errors && errors.email ? errors.email.message : ""}
                    </span>

                    <TextField
                        className="w-[50%]"
                        {...register("phone", {
                            required: "Phone is Required",
                        })}
                        label="Phone"
                        variant="outlined" />

                    <span className="text-red-500">
                        {errors && errors.email ? errors.email.message : ""}
                    </span>

                    <TextField
                        className="w-[50%]"
                        {...register("website", {
                            required: "website is Required",
                        })}
                        label="Website"
                        variant="outlined" />

                    <span className="text-red-500">
                        {errors && errors.email ? errors.email.message : ""}
                    </span>


                    <Button className="w-[15%]" type="submit" variant="outlined">Review</Button>
                </form>
            </div>
        </>
    )
};

export default CreateUser;