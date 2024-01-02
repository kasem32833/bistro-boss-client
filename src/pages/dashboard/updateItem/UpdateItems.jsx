import { useLoaderData } from "react-router-dom";

const UpdateItems = () => {
    const {item} = useLoaderData();
    console.log(item);
    return (
        <div>
            <p>this is an update item page</p>
        </div>
    );
};

export default UpdateItems;