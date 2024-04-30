import {Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import * as Styled from './styles.ts'
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {ClientSchema} from "../../schemas/clientSchema.ts";
import {z} from "zod";
import {useMutation} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

const PageClientAdd = () => {

    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: async (dataClient: ClientForm) => {
            const req = await fetch(`api/client`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body:  JSON.stringify(dataClient)
            })
            const responseText = await req.text();
            return responseText ? JSON.parse(responseText) : null
        },
        onSuccess: async () => {
           navigate('/')
           navigate(0)
        }
    })


    type ClientForm = z.infer<typeof ClientSchema>
    const { register, handleSubmit, watch, formState: { errors } } = useForm<ClientForm>({
        resolver: zodResolver(ClientSchema)
    });
    const type = watch("type");

    const onSubmit = (data:ClientForm) => {
        console.log("data", data)
        mutation.mutate({...data})
    };

    console.log("errors", errors)


    return(
        <Styled.Container>
            <Styled.WrapperList>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl fullWidth>
                        <InputLabel>Tipo de Cliente</InputLabel>
                        <Select {...register("type")}>
                            <MenuItem value="PF">Pessoa Física</MenuItem>
                            <MenuItem value="PJ">Pessoa Jurídica</MenuItem>
                        </Select>
                        {errors.type && <FormHelperText error>{errors.type.message}</FormHelperText>}
                    </FormControl>

                    {type === "PF" && (
                        <>
                            <TextField {...register("name")} fullWidth label="Nome" placeholder="Nome" margin="normal" />
                            {errors.name && <FormHelperText error>{errors.name.message}</FormHelperText>}
                            <TextField {...register("cpf")} fullWidth label="CPF" placeholder="CPF" margin="normal" />
                            {errors.cpf && <FormHelperText error>{errors.cpf.message}</FormHelperText>}
                        </>
                    )}

                    {type === "PJ" && (
                        <>
                            <TextField {...register("tradeName")} fullWidth label="Nome Fantasia" placeholder="Nome Fantasia" margin="normal" />
                            {errors.tradeName && <FormHelperText error>{errors.tradeName.message}</FormHelperText>}
                            <TextField {...register("companyName")} fullWidth label="Razão Social" placeholder="Razão Social" margin="normal" />
                            {errors.companyName && <FormHelperText error>{errors.companyName.message}</FormHelperText>}
                            <TextField {...register("cnpj")} fullWidth label="CNPJ" placeholder="CNPJ" margin="normal" />
                            {errors.cnpj && <FormHelperText error>{errors.cnpj.message}</FormHelperText>}
                        </>
                    )}

                    <TextField {...register("email")} fullWidth label="Email" placeholder="Email" margin="normal" />
                    {errors.email && <FormHelperText error>{errors.email.message}</FormHelperText>}
                    <TextField {...register("phone")} fullWidth label="Telefone" placeholder="Telefone" margin="normal" />
                    {errors.phone && <FormHelperText error>{errors.phone.message}</FormHelperText>}

                    <Button type="submit" variant="contained" color="primary" fullWidth>Enviar</Button>
                </form>
            </Styled.WrapperList>
        </Styled.Container>
    )
}


export default PageClientAdd
