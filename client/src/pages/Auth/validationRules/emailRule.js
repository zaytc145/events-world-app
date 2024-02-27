const emailRule = {
    validator: (_, value) => new Promise((resolve, reject) => {
        if (!value) {
            resolve()
        }
        const isValid = /@/.test(value);
        isValid ? resolve() : reject(new Error('Email should contain @'));
    }),
}

export default emailRule;