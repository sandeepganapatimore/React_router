const Validation = (form) => {
    let error = {}

    if (form.name) {
        error.name = "Name required"
    }
    else if (form.name.length < 4) {
        error.name = "Character should be more than 4 character"
    }
    if (form.email) {
        error.email = "email required"
    }
    else if (form.email.length < 4) {
        error.email = "Character should be more than 4 character"
    }
    if (form.password) {
        error.password = "email required"
    }
    else if (form.password.length < 6 && form.password === "@") {
        error.password = "Character should be more than 4 character"
    }
    return error
}

export default Validation()     