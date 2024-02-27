const loginRule = {
    validator: (_, value) => new Promise((resolve, reject) => {
        const isValid = /^[A-Za-z0-9]*$/.test(value);
        isValid ? resolve() : reject(new Error('Invalid login format'))
    }),
}

export default loginRule;