import React, { useState } from 'react';
import {
  Container,
  Typography,
  Divider,
  Grid,
  TextField,
  Button,
  Modal,
  Box,
  Chip,
} from '@mui/material';
import { DataGrid, GridColumns } from '@mui/x-data-grid';
import Spinner from '../../../components/Spinner';
import { TOpenBankingProps } from '../../../@types/ComponentProps/TOpenBankingProps';

export const OpenBanking: React.FC<TOpenBankingProps> = ({}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [participants, setParticipants] = useState([]);

  const dataColumns: GridColumns = [
    {
      field: 'name',
      headerName: 'Nome',
      width: 270,
      headerClassName: 'style--header',
      cellClassName: 'style--cell',
    },
    {
      field: 'logo',
      headerName: 'Logo',
      width: 210,
      headerClassName: 'style--header',
      cellClassName: 'style--cell',
    },
    {
      field: 'urlConfiguration',
      headerName: 'Url de Configuração',
      width: 210,
      headerClassName: 'style--header',
      cellClassName: 'style--cell',
    },
  ];

  const styleModal = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 10,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Container sx={{ p: 4 }}>
        <Typography
          sx={{ mt: 0, mb: 1 }}
          variant="h4"
          color="#012D65"
          component="div"
          fontWeight="fontWeightBold"
          fontSize="26px"
          fontFamily="'Poppins',sans-serif"
        >
          Participantes Open Banking
        </Typography>

        <Divider color="#FCC317" sx={{ mb: 3 }} />

        {loading && <Spinner id="openBanking" />}

        {!loading && (
          <>
            <Box
              sx={{
                height: 450,
                width: '100%',
                '& .style--header': {
                  fontWeight: '700',
                  fontSize: '12px',
                },
                '& .style--cell': {
                  fontSize: '10px',
                },
              }}
            >
              <DataGrid
                density="compact"
                rows={participants}
                columns={dataColumns}
                // pageSize={pageSize}
                // onPageChange={handlePageChange}
                disableVirtualization
                paginationMode="server"
                rowsPerPageOptions={[10]}
                // rowCount={totalPages}
                sx={{
                  boxShadow: 1,
                  border: 1,
                  borderColor: 'black',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                  },
                  '& .MuiDataGrid-columnHeaderTitle': {
                    fontWeight: '700',
                  },
                }}
              />
            </Box>
          </>
        )}

        {/* <Spinner /> */}
      </Container>
    </>
  );
};

export default OpenBanking;
