import {
    Button,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {ListProps} from "./types.ts";
import {useNavigate} from "react-router-dom";
import * as Styled from './styles.ts'

const ListClient = ({ data, onDelete, onUpdate }:ListProps) => {

    const navigate = useNavigate();

    const onNavigateClientAdd =() =>{
        navigate('/addClient')
        navigate(0)
    }


    return (
        <TableContainer component={Paper}>

            <Styled.Container>
                <Button onClick={onNavigateClientAdd} variant="contained">CADASTRAR CLIENTE</Button>
                {data.length === 0 && (
                    <Styled.NotData>SEM DADOS PARA EXIBIR</Styled.NotData>
                )}
            </Styled.Container>

            {data.length > 0 && (
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell align="right">Tipo</TableCell>
                            <TableCell align="right">CPF/CNPJ</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Telefone</TableCell>
                            <TableCell align="right">AÇÕES</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name || row.companyName}
                                </TableCell>
                                <TableCell align="right">{row.type}</TableCell>
                                <TableCell align="right">{row.cpf || row.cnpj}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={()=> onUpdate(row.id)}>
                                        <EditIcon/>
                                    </IconButton>
                                    <IconButton onClick={()=> onDelete(row.id)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}


        </TableContainer>
    );
};

export default ListClient;
