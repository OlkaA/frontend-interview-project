import React, { FC, useState } from 'react';
import classnames from 'classnames';
import styles from './modal.module.scss';


interface Props {
    className?: Optional<string>;
    title?: string;
    buttonTitle?: string;
}

interface State {
    isShown: boolean;
}

const initialState: State = {
    isShown: false,
};

const Modal: FC<Props> = (props) => {
    const { className, title, buttonTitle, ...otherProps } = props;
    const [state, setState] = useState<State>(initialState);

    const rootClass = classnames(
        {
            [styles.root]: true,
            [styles.rootNoTitle]: !title,
        },
        className,
    );

    return (
        state.isShown
            ? <div {...otherProps} className={rootClass}>
                <div>
                    {title ? <h2>{title}</h2> : null}
                    {props.children ? <div>{props.children}</div> : null}
                    <button className={styles.close} onClick={() => setState((s) => ({ ...s, isShown: false }))}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>
            </div>
            : <button onClick={() => setState((s) => ({ ...s, isShown: true }))}>{buttonTitle}</button>
    );
};

export default Modal;
