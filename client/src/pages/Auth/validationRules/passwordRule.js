const passwordRule = {
    validator: (_, value) => new Promise((resolve, reject) => {
        const isValid = /^[a-z]*$/.test(value);
        isValid ? resolve() : reject(new Error('Only lower case letters are allowed'));
    }),
}

export default passwordRule;