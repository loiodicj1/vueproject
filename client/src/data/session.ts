import router from "@/router";
import { reactive } from "vue";

export interface User {
    name: String,
    bio: String,
}

const session = reactive({
    user: null as User | null,
})

export function login(nameInput: String, bioInput: String) {
    session.user = {
        name: nameInput,
        bio: bioInput,
    }
}

export function logout() {
    session.user = null
}

export default session;