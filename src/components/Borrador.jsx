import { useForm } from "react-hook-form";
import {

  Button,

  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from '@chakra-ui/react';

function Borrador() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aquí puedes enviar los datos del formulario
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.nombre}>
          <FormLabel htmlFor="nombre">Nombre</FormLabel>
          <Input type="text" id="nombre" {...register("nombre", { required: "El nombre es requerido" })} />
          <FormErrorMessage>{errors.nombre && errors.nombre.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" id="email" {...register("email", { required: "El email es requerido", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })} />
          <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" mt={4} colorScheme="teal">Enviar</Button>
      </form>
    </>
  );
}

export default Borrador;
