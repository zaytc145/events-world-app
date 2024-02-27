const passwordRule = ({getFieldValue}) => ({
    validator: (_, value) =>
        new Promise((resolve, reject) => {
            if (!value || getFieldValue('password') === value) {
                return resolve();
            }
            return reject(new Error('The new password that you entered do not match!'));
        })
})

export default passwordRule;