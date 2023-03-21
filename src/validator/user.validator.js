const { check, param } = require("express-validator");
const validateResult = require("../utils/validate");

const createUserValidator = [
    check("username", "Error con el campo username")
        .exists()
        .withMessage("Debe existir la propiedad 'username'")
        .notEmpty()
        .withMessage("El username no debe estar vacio")
        .isString()
        .withMessage("El username debe ser un string")
        .isLength({ min: 6, max: 30 })
        .withMessage("El username debe tener entre 6 y 30 caracteres"),
    check("email", "Error con el correo electronico")
        .exists()
        .withMessage("No se encontro la propiedad email")
        .notEmpty()
        .withMessage("No se encontro un valor para la propiedad 'email'")
        .isString()
        .withMessage("la propiedad email debe ser un string")
        .isLength({ min: 7, max: 50 })
        .withMessage("EL correo debe tener una longitud entre 7 y 50 caracteres")
        .isEmail()
        .withMessage("El correo no tiene un formato correcto"),
    check("password", "Error con la contraseña")
        .exists()
        .withMessage("No se encontro la propiedad password")
        .notEmpty()
        .withMessage("No se encontro un valor para la propiedad password")
        .isString()
        .withMessage("la propiedad password debe ser un string")
        .isLength({ min: 7 })
        .withMessage("password debe tener una longitud minima de 7 caracteres"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const updateUserValidator = [
    param("id").isInt().withMessage("El id debe ser un numero entero"),
    check("name")
        .isString()
        .withMessage("la propiedad name debe ser un string")
        .exists()
        .withMessage("No se encuentra el nombre para el usuario")
        .notEmpty()
        .withMessage("La propiedad name no debe ser un string vacio"),
    check("lastname")
        .isString()
        .withMessage("la propiedad lastname debe ser un string")
        .exists()
        .withMessage("No se encuentra la propiedad lastname")
        .notEmpty()
        .withMessage("la propiedad lastname no debe ser un string vacio"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const loginValidator = [
    check("email", "Error con el correo electronico")
        .exists()
        .withMessage("No se encontro la propiedad email")
        .notEmpty()
        .withMessage("No se encontro un valor para el email")
        .isString()
        .withMessage("la propiedad email debe ser un string")
        .isEmail()
        .withMessage("El correo no tiene un formato correcto"),
    check("password", "Error con la contraseña")
        .exists()
        .withMessage("No se encontro la propiedad password")
        .notEmpty()
        .withMessage("No se encontro un valor para la propiedad password")
        .isString()
        .withMessage("la propiedad password debe ser un string"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

module.exports = {
    createUserValidator,
    updateUserValidator,
    loginValidator,
};