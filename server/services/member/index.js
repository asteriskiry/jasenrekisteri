module.exports = {
    onUpdateSuccess: {
        success: true,
        message: 'Tiedot päivitetty onnistuneesti.'
    },
    onFieldEmpty: {
        success: false,
        message: 'Kaikki kentät ovat pakollisia.'
    },
    onPasswordNotMatch: {
        success: false,
        message: 'Salasanat eivät täsmää.'
    },
    onClientAdminFail: {
        success: false,
        message: 'Asiakas ei ole admin.'
    },
    onServerAdminFail: {
        success: false,
        message: 'Tämä alue vain vain hallituslaisille.'
    }
};