import 'axios'
import {AxiosRequestConfig} from "axios";

export {}

declare module 'axios' {
    interface AxiosInstance {
        (config: AxiosRequestConfig): Promise<any>
    }

}
