import React, { useCallback } from 'react';
import { RHFInput } from 'react-hook-form-input';
import t from 'prop-types';
import NumberFormat from 'react-number-format';

export function CustomNumberFormat({ onChange, setValue, register, name, rules, mode, inputRef, ...other }) {
    const onValueChange = useCallback(
        values => {
            onChange({
                target: {
                    value: values.value,
                },
            });
        },
        [onChange]
    );

    return (
        <RHFInput
            register={register}
            setValue={setValue}
            rules={rules}
            name={name}
            mode={mode}
            as={<NumberFormat {...other} onValueChange={onValueChange} {...other} />}
        />
    );
}

CustomNumberFormat.propTypes = {
    setValue: t.func.isRequired,
    register: t.func.isRequired,
    name: t.string.isRequired,
    rules: t.object,
    mode: t.oneOf(['onChange', 'onSubmit']),
    onChange: t.func,
    inputRef: t.any,
};

CustomNumberFormat.defaultProps = {
    onChange: () => {},
    mode: 'onSubmit',
    rules: {},
};

// format="#### #### #### ####"
// mask="_"

export default CustomNumberFormat;