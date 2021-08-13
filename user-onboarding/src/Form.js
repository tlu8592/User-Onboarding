import React from 'react';

export default function Form(props) {
    const { values, change, submit, disable, errors } = props;

    const onChange = evt => {
        const { checked, name, type, value } = evt.target;
        if (type === 'checkbox') {
            change(name, checked);
        } else {
            change(name, value);
        }
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>
                    First Name
                    <input 
                        type='text' 
                        name='first_name'
                        onChange={onChange}
                        value={values.first_name} 
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type='text' 
                        name='last_name'
                        onChange={onChange}
                        value={values.last_name} 
                    />
                </label>
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email} 
                    />
                </label>
                <label>
                    Password
                    <input 
                        type='password'
                        name='password'
                        onChange={onChange}
                        value={values.password}
                    />
                </label>
                <label>
                    Do you agree with these terms of service?
                    <input 
                        type='checkbox'
                        name='termsAgreed'
                        onChange={onChange}
                        checked={values.termsAgreed}
                    />
                </label>
                <div>
                    <button id='submitBtn' disabled={disable}>Submit</button>
                </div>
                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termsAgreed}</div>
                </div>
            </form>
        </div>
    )
}
