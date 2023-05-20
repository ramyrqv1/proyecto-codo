    const userNameField = document.querySelector("[name=nombre-usuario]");
    const emailField = document.querySelector("[name=user-email]");
    const telefonoField = document.querySelector("[name=telefono]");
    const asuntoField = document.querySelector("[name=asunto]");
    const presentacionField = document.querySelector("[name=presentacion]");
    const fileField = document.querySelector("[name=curriculum");

    const validateEmptyField = (mensaje, e) => {
            const field = e.target;
            const fieldValue = e.target.value;
            if (fieldValue.length <= 0) {
                field.nextElementSibling.classList.add("error")
               field.nextElementSibling.innerText = mensaje;
            }else{
                field.nextElementSibling.classList.remove("error")
               field.nextElementSibling.innerText = ""; 
            }
    }  

    const validateEmailFormat = e => {
        const field = e.target;
        const fieldValue = e.target.value;
        const expresiones = new RegExp (/^[a-zA-Z0-9_.+-]+@[a-zA_Z0-9-]+\.[a-zA_Z0-9-.]+$/);
        if (fieldValue.trim().length > 5 && !expresiones.test(fieldValue)){
            field.classList.add("invalido");
            
        } else {
            field.classList.remove("invalido");
        }
           
           
    }

    userNameField.addEventListener("blur", (e) =>  validateEmptyField("nombre y apellido es requerido", e));
    emailField.addEventListener("blur", (e) =>  validateEmptyField("email es requerido", e)); 
    telefonoField.addEventListener("blur", (e) =>  validateEmptyField("telefono es requerido", e));
    asuntoField.addEventListener("blur", (e) =>  validateEmptyField("asunto es requerido", e));
    presentacionField.addEventListener("blur", (e) =>  validateEmptyField("presentacion es requerido", e));

    emailField.addEventListener("keyup", validateEmailFormat)

    fileField.addEventListener("change", (e) => {
        const field = e.target;
        const fileExt = e.target.files[0].name.split(".").pop().toLowerCase();
        const validoExt = ["jpg", "jpeg", "png", "pdf"];
        if (!validoExt.includes(fileExt)){
            field.nextElementSibling.classList.add("error")
            field.nextElementSibling.innerText = `Solo archivos tipo: ${validoExt.join(", ")}`;
         }else{
             field.nextElementSibling.classList.remove("error");
            field.nextElementSibling.innerText = ""; 
        }
    });