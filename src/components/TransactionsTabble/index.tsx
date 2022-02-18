import { Container } from './styles';

export function TransactionsTable() {
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
            <td>R$ 12.0000</td>
            <td>Free Lancer</td>
            <td>28/2/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.0000</td>
            <td>Free Lancer</td>
            <td>28/2/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td>R$ 12.0000</td>
            <td>Free Lancer</td>
            <td>28/2/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
