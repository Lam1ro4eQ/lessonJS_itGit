import React, {FunctionComponent} from 'react';

type PropsType = {
    title: string
    children: React.ReactNode
}

export const ChildComp: React.FC<PropsType> = ({title, children}) => {
    return (
        <div>
            <h1>{title}</h1>
            {children}
            <div>
                <span>Yes</span>
                <span>No</span>
            </div>
        </div>
    );
};

