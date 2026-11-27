import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerschema } from "../components/FormSchema/registerschema";
import { useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register sucess")
        navigate("/" , {
            state: data
        })
    }
    return ( 
        <div className="h-screen w-full flex justify-center items-center bg-gray-400">
            <form onSubmit={handleSubmit(onSubmit1)} className="flex flex-col gap-2 bg-white p-10 rounded-2xl shadow-2xl shadow-black border-2">
                <input type="text"  placeholder="Enter you name"  {...register("name")} className="border-2 p-2 rounded-2xl w-full"/>
                <p>{errors.name?.message}</p>
                <input type="email"  placeholder="Enter you email"  {...register("email")} className="border-2 p-2 rounded-2xl w-full"/>
                <p>{errors.email?.message}</p>
                <input type="password"  placeholder="Enter you password"  {...register("password")} className="border-2 p-2 rounded-2xl w-full"/>
                <p>{errors.password?.message}</p>
                <input type="number"  placeholder="Enter you age"  {...register("age")} className="border-2 p-2 rounded-2xl w-full"/>
                <p>{errors.age?.message}</p>
                <button type="submit" className="bg-blue-500  rounded-4xl text-white font-bold py-2">Submit</button>
            </form>
        </div>

     );
}

export default Register;