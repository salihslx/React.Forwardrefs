import { forwardRef, useEffect } from "react";


const BasicInput = forwardRef(({type, placeholder}, ref) =>{

    useEffect(()=>{
        ref.current.focus()
    },[])

    return (
        <div>
            <input  ref={ref}
                    value={ref.current?.value}
                    type={type}
                    placeholder={placeholder} />
        </div>
    );


})

export default BasicInput;
      
