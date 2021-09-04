import * as React from 'react';
import 'src/features/pages/user/user.style.scss';
import { Outlet } from 'react-router-dom';

const LogoOnlyLayout = (): JSX.Element => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default LogoOnlyLayout;