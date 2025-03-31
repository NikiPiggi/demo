import React, { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './layout.module.css';

interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className, ...rest }) => (
    <div {...rest} id="layout" className={classNames(styles.layout, className)}>
        {children}
    </div>
);

export default Layout;