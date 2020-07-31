import React, { FC, useState, useEffect, ChangeEvent } from "react";
import classnames from "classnames";
import styles from "./editableLabel.module.scss";


interface Props {
    className?: Optional<string>;
    text?: string;
}

interface State {
    textValue: string
    value: string;
    isEditMode: boolean
}

const initialState: State = {
    textValue: "Your Text",
    value: "",
    isEditMode: false,
};

const EditableLabel: FC<Props> = (props) => {
    const { className, text, ...otherProps } = props;

    const [state, setState] = useState<State>(initialState);

    useEffect(() => {
        if (text) {
            setState((s) => ({ ...s, textValue: text, value: text }))
        }
    }, [text]);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setState((s) => ({ ...s, value: event.target.value }))
    }

    const onSave = () => {
        setState((s) => ({ ...s, isEditMode: false, textValue: state.value }))
    }

    const onClose = () => {
        setState((s) => ({ ...s, isEditMode: false, value: state.textValue }))
    }

    const rootClass = classnames(
        {
            [styles.root]: true,
        },
        className,
    );

    return (<div {...otherProps} className={rootClass}>
        <div className={styles.wrapper}>
            {!state.isEditMode && <div className={styles.title} onClick={() => setState((s) => ({ ...s, isEditMode: true }))}>{state.textValue}</div>}
            {state.isEditMode &&
                <div>
                    <input type="text" onChange={onChange} placeholder="Write your own text" value={state.value} />
                    <button className={styles.save} onClick={onSave}><i className="fas fa-check"></i></button>
                    <button className={styles.close} onClick={onClose}><i className="fas fa-times"></i></button>
                </div>}
        </div>
    </div>
    );
};

export default EditableLabel;
