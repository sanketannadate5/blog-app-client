import CustomNavBar from "./CustomNavBar";

const Base = ({title = "Welcome to our website", children})=>{
    return(
        <div>
            {/* <h1>This is Header</h1> */}
            <CustomNavBar/>
            {children}
            <h1>This is Footer</h1>
        </div>
    );
};

export default Base;