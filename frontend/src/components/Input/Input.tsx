import { forwardRef } from "react";

type Props = {
    placeholder: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
    ({ placeholder, ...rest }: Props, ref) => {
        return (
            <input
                ref={ref}
                className="w-full border-2 border-gray-200 rounded-md p-2 outline-none my-2"
                placeholder={placeholder}
                {...rest}
            />
        );
    }
);

export default Input;