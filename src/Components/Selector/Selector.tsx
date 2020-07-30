import * as React from "react";
import { createPortal } from "react-dom";
import Foco from "react-foco";
import cn from "./Selector.less";

const Portal = ({ children }: { children: React.ReactNode }) => {
    const container = document.body;

    if (!container) {
        throw new Error("Container for portal is empty");
    }
    return createPortal(children, container);
};

// ToDo изменять размеры при ресайзе
const Dropdown = ({
    anchor,
    children,
}: {
    anchor: HTMLLabelElement | null | undefined,
    children: React.ReactNode,
}) => {
    const SELECTOR_OUTLINE_SIZE = 1;

    if (!anchor) {
        throw new Error("Anchor in Dropdown component is empty");
    }

    const {
        top: anchorTop,
        left: anchorLeft,
        height: anchorHeight,
        width,
    } = anchor.getBoundingClientRect();

    const top = anchorTop + anchorHeight + SELECTOR_OUTLINE_SIZE + window.pageYOffset;

    const left = anchorLeft + window.pageXOffset;

    return (
        <Portal>
            <div className={cn("dropdown")} style={{ top, left, width }}>
                {children}
            </div>
        </Portal>
    );
};

type Props = {
    search: string,
    tokens: string[],
    renderToken: (value: string) => React.ReactNode,
    children: React.ReactNode,
    onEnterKeyDown: () => void,
    onBackspaceKeyDown: () => void,
    onInputChange: (value: string) => void,
};

type State = {
    focused: boolean,
};

// ToDo прокинуть плейсхолдер
class Selector extends React.Component<Props, State> {
    dropdownAnchorRef = React.createRef<HTMLLabelElement>();

    searchInputRef = React.createRef<HTMLInputElement>();

    constructor(props: Props) {
        super(props);

        this.state = {
            focused: false,
        };
    }

    handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const { onInputChange } = this.props;

        onInputChange(evt.target.value);
    };

    handleInputKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>): void => {
        const { tokens } = this.props;
        if (evt.key === "Enter") {
            const { onEnterKeyDown } = this.props;
            onEnterKeyDown();
            this.closeDropdown();
        }

        if (
            evt.key === "Backspace" &&
            evt.currentTarget.selectionStart === 0 &&
            tokens.length !== 0
        ) {
            const { onBackspaceKeyDown } = this.props;
            onBackspaceKeyDown();
        }
    };

    openDropdown = (): void => {
        const { focused } = this.state;

        if (!focused) {
            this.setState({ focused: true });
        }
    };

    closeDropdown = (): void => {
        const { focused } = this.state;

        if (focused) {
            if (this.searchInputRef.current) {
                this.searchInputRef.current.blur();
            }

            this.setState({ focused: false });
        }
    };

    render(): JSX.Element {
        const { focused } = this.state;
        const { search, tokens, renderToken, children } = this.props;

        return (
            <>
                <Foco className={cn("wrapper")} onClickOutside={this.closeDropdown}>
                    <label
                        className={cn({ selector: true, focused })}
                        htmlFor="selector"
                        ref={this.dropdownAnchorRef}
                    >
                        {tokens.map(token => (
                            <span key={token} className={cn("token-container")}>
                                {renderToken(token)}
                            </span>
                        ))}
                        <input
                            className={cn("input")}
                            id="selector"
                            type="text"
                            value={search}
                            autoComplete="off"
                            ref={this.searchInputRef}
                            onChange={this.handleInputChange}
                            onKeyDown={this.handleInputKeyDown}
                            onFocus={this.openDropdown}
                        />
                    </label>
                    {focused && (
                        <Dropdown anchor={this.dropdownAnchorRef.current}>{children}</Dropdown>
                    )}
                </Foco>
            </>
        );
    }
}

export { Selector as default };
