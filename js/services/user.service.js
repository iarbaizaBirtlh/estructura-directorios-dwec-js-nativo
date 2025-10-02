import { UserData } from "../data/user.data.js";

function mediaEdad() {
    let sum = 0;

    for (let i = 0; i < UserData.length; i++) {
        sum += UserData[i].edad;
    }

    return sum / UserData.length;
}

export const UserService = {
    mediaEdad : mediaEdad
}
