import { Button, Stack, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";
import type { User } from "../models/user.model";
import type { AppDispatch } from "../app/store";
import { useDispatch } from "react-redux";
import { saveUser } from "../features/userSlice";
import { deleteUsers } from "../services/user.service";

const UserGrid = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { data } = useUser();

    const onUpdateClick = (userData: User) => {
        dispatch(saveUser(userData));
        navigate("/update");
    };

    const onDeleteClick = async (userId: string) => {
        await deleteUsers(userId)
    }

    return (
        <>
            <Button className="bg-blue-400 m-5" variant="contained" onClick={() => navigate('/create')}>Create User</Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone Number</TableCell>
                        <TableCell>Website</TableCell>
                        <TableCell>Update/Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.map((user: User, index: number) => {
                        return <TableRow key={index}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>{user.website}</TableCell>
                            <TableCell>
                                <Stack spacing={2} direction="row">
                                    <Button onClick={() => onUpdateClick(user)} className="bg-green-500" variant="contained">Update</Button>
                                    <Button onClick={() => onDeleteClick(user.name)} className="bg-red-600" variant="contained">Delete</Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </>
    )
};

export default UserGrid;