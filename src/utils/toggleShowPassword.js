const togggleShowPassword = (input) => {
    if (input.type === "password") {
        input.type = "text"
    } else {
        input.type = "password"
    }
}

export { togggleShowPassword }