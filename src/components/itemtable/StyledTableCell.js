import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: '#EAEAEA',
      color: "var(--color-theme-dark)",
    },
    body: {
      fontSize: 14
    },
  }))(TableCell);

export default StyledTableCell