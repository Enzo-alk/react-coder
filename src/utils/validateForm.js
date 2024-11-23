import { object, string, mixed } from "yup";

let userSchema = object({
  fullname: string().required("Debe indicar su nombre para avanzar."),
  phone: mixed().required("Debe indicar su teléfono para avanzar."),
  email: string()
    .email("Debe indicar un email válido.")
    .required("Debe indicar su email para avanzar."),
  address: string().required("Debe indicar su dirección para avanzar."),
  city: string().required("Debe indicar su ciudad para avanzar."),
  province: string().required("Debe indicar su provincia para avanzar."),
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", message: error.message };
  }
};

export default validateForm;
