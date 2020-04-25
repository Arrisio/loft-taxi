import NumberFormat from "react-number-format";
import React from "react";

export const CardCVCFormat = (props) => {
    const {inputRef, onChange, ...rest} = props;
    return (
        <NumberFormat
            {...rest}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            format="###"
            mask="_"
        />
    );
};