import axios from "axios";

export default class LoginManagerApi {

    static async isLoggedIn(): Promise<boolean> {
        console.log("IsLogged in is still unimplemented")
        return false
    }

    static async tryLogin(userName: string, password: string): Promise<boolean> {

        const form = new FormData()
        form.set("user_name", userName)
        form.set("password", password)

        const result = await axios.post("/api/users/try-login", form, {
            headers: {
                'enctype': 'multipart/form-data',
                'content-type': "application/x-www-form-urlencoded",
                'Content-Type': "application/x-www-form-urlencoded"
            }
        })


        return true
    }

}