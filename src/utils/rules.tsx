export const rules = {
    required: (msg: string = "Required value") => (
        {required: true, message: msg}
    )
}