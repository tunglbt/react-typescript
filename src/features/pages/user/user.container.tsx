import * as React from 'react';
import { connect } from 'react-redux';
import userActions from 'src/core/reduxs/User/userActions';
import User from 'src/core/models/User.model';
import 'src/features/pages/user/user.style.scss';
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@mui/material';

interface Column {
    id: 'id' | 'firstName' | 'lastName' | 'active' | 'posts' | 'messages';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    {id: 'id', label: 'ID', minWidth: 50},
    {id: 'firstName', label: 'First Name', minWidth: 200},
    {id: 'lastName', label: 'Last Name', minWidth: 200},
    {id: 'active', label: 'Active', minWidth: 100},
    {id: 'posts', label: 'Posts', minWidth: 100},
    {id: 'messages', label: 'Messages', minWidth: 100},
];

type Props = {
    fetchUsers: () => Promise<any>,
    users: User[];
    isFetching: boolean,
    error: any;
}

class UserContainer extends React.Component<Props, any> {
    state = {
        page: 0,
        rowsPerPage: 5
    }

    componentDidMount() {
        this.props.fetchUsers();
    };

    handleChangePage = (event: unknown, newPage: number) => {
        this.setState({page: newPage});
    }

    handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            page: 0,
            rowsPerPage: +event.target.value
        })
    };

    render() {
        if (this.props.isFetching) {
            return <div>Loading</div>
        }

        if (this.props.error) {
            return <div style={{color: 'red'}}>ERROR: {this.props.error}</div>
        }
        const rows: User[] = this.props.users;
        const {page, rowsPerPage} = this.state;

        return (
            <div>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={'center'}
                                        style={{minWidth: column.minWidth}}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        <TableCell align={'center'}>
                                            {row.id}
                                        </TableCell>
                                        <TableCell align={'center'}>
                                            {row.firstName}
                                        </TableCell>
                                        <TableCell align={'center'}>
                                            {row.lastName}
                                        </TableCell>
                                        <TableCell align={'center'}>
                                            <Checkbox
                                                checked={row.active}
                                                color="primary"
                                                inputProps={{'aria-label': 'primary checkbox'}}
                                            />
                                        </TableCell>
                                        <TableCell align={'center'}>
                                            {row.posts}
                                        </TableCell>
                                        <TableCell align={'center'}>
                                            {row.messages}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onRowsPerPageChange={this.handleChangeRowsPerPage}
                    onPageChange={this.handleChangePage}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userReducer.users,
    isFetching: state.userReducer.isFetching,
    error: state.userReducer.error,
});

const mapDispatchToProps = {
    fetchUsers: userActions.fetchUsers,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserContainer);