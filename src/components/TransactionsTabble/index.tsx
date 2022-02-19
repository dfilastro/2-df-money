import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='income'>R$ 12.0000</td>
            <td>Free Lancer</td>
            <td>28/2/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='outcome'>-R$ 1.000</td>
            <td>Free Lancer</td>
            <td>2/3/2022</td>
          </tr>
          <tr>
            <td>Salário</td>
            <td className='income'>R$ 30.0000</td>
            <td>BairesDev</td>
            <td>5/3/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
