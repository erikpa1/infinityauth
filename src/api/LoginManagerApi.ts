export default class LoginManagerApi {

    static async isLoggedIn(): Promise<boolean> {
        console.log("IsLogged in is still unimplemented")
        return false
    }

    static async tryLogin(userName: string, password: string): Promise<boolean> {
        console.log("Login is still not implemented")
        return true
    }

}