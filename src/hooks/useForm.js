import { useState } from "react";

export const useForm = (state = {}) => {

    const [values, setValues] = useState(state)

    const handleImputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value

        })
    }
    return [values, handleImputChange]

}
