import { CircularProgress} from "@mui/material";
import ListClient from "../components/List";
import * as Styled from './styles.ts'
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {useNavigate} from "react-router-dom";

const PageListClient = () => {


    const queryClient = useQueryClient();
    const navigate =   useNavigate()

    const { isLoading, isError, data, isSuccess } = useQuery({
        queryKey: ['listClient'],
        queryFn: () =>
            fetch('api/client').then((res) =>
                res.json(),
            ),
    })

    const mutation = useMutation({
        mutationFn: async (id: string) => {

            const req = await fetch(`api/client/${id}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
            });

            const responseText = await req.text();
            return responseText ? JSON.parse(responseText) : null
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['listClient']});
        }
    });


    const onDelete = (id:string) => {
        mutation.mutate(id)
    }

    const onUpdate = () => {
        navigate('/editClient')
        navigate(0)
    }


    return(
        <Styled.Container>
        <Styled.WrapperList>
            {isLoading && (<CircularProgress />)}
            {isError && <div>Erro</div>}
            {isSuccess && (
                <ListClient
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    data={data}
                />
            )}
        </Styled.WrapperList>
        </Styled.Container>
    )
}


export default PageListClient
