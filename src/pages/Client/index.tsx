import { CircularProgress } from "@mui/material";
import ListClient from "../components/List";
import * as Styled from './styles.ts'
import {useQuery} from "@tanstack/react-query";

const PageListClient = () => {

    const { isLoading, isError, data } = useQuery({
        queryKey: ['listClient'],
        queryFn: () =>
            fetch('api/client').then((res) =>
                res.json(),
            ),
    })

    return(
        <Styled.Container>
        <Styled.WrapperList>
            {isLoading && (<CircularProgress />)}
            {isError && <div>Erro</div>}
            {data?.length > 0 ? (
                <ListClient
                    onDelete={()=> console.log("DADAS")}
                    onUpdate={()=> console.log('DASDASUHDHU')}
                    data={data}
                />
            ): (
                <Styled.AddClient>
                    Sem Dados para exibir <a href="">Adicione um cliente</a>
                </Styled.AddClient>
            )}
        </Styled.WrapperList>
        </Styled.Container>
    )
}


export default PageListClient
