class UserDTO{
    constructor(userModel) {
        this.email = userModel.email;
        this.login = userModel.login;
    }
}

export default UserDTO