module.exports = {
    errors: {
        "374": "[374] Reset link is invalid",
        "392": "[392] Invalid player id",
        "433": "[433] An internal error occured",
        "465": "[465] File too large",
        "541": "[541] A user already exists with that email",
        "564": "[564] Could not find team",
        "567": "[567] Email, first and last name must be less than 70 characters long",
        "787": "[787] No user with specified email",
        "792": "[792] Missing information in your query parameters",
        "871": "[871] Invalid auth for team access",
        "873": "[873] Cannot quit own team",
        "882": "[882] Invalid invite code",
        "983": "[983] Email is invalid, enter a valid email",
        "986": "[986] Invalid credentials",
        "992": "[992] Access token not provided",
        "993": "[993] Invalid access token"
    },
    errorify: function (){
        let errorFormat = JSON.stringify({
            error: this
        });
        return errorFormat;
    }
}