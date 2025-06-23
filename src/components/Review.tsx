import { useSelector } from "react-redux";
import type { MainState } from "../app/store";
import { Button } from "@mui/material";

const Review = () => {
    const userData = useSelector((data: MainState) => data.user);
    const currentScreen = sessionStorage.getItem('currentMode');

    const onSubmit = () => {

    }

    return (
        <>
            <section className="w-100 h-100 m-5 p-5">
                <span>Review Data</span>
                <div className="flex flex-col justify-center items-center border border-black gap-5 p-5">
                    <span>Name:{userData.name}</span>
                    <span>Email:{userData.email}</span>
                    <span>phone:{userData.phone}</span>
                    <span>website:{userData.website}</span>
                </div>
                <Button className="w-[15%] m-5" type="button" variant="outlined" onClick={onSubmit}>{(currentScreen === '/create' ? 'Create' : 'Update')}</Button>
            </section>
        </>
    )
};

export default Review;