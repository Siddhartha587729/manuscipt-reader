import { useNavigate } from "react-router-dom"

const Unauthorized = () => {
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    return (
        <section className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-red-600 font-semibold text-4xl">Unauthorized</h1>
            <br />
            <p>You do not have access to the requested page.</p>
            <div className="flexGrow mt-8">
                <button onClick={goBack} className="font-bold text-white bg-orange-400 rounded-3xl ">Go Back</button>
            </div>
        </section>
    )
}

export default Unauthorized