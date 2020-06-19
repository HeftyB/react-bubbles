import axiosWithAuth from "./axiosWithAuth";

export const fetchData = () => {
    return axiosWithAuth()
        .get("/api/colors")
        .then( res => {
            return res
        })
}
