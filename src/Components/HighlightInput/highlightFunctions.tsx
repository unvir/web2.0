import React from "react";
import { TriggerTargetProblem } from "../../Domain/Trigger";
import { Token } from "./parser/parseExpression";
import BracketHighlightToken from "./Tokens/BracketHighlightToken";
import ErrorToken from "./Tokens/ErrorToken";
import FunctionToken from "./Tokens/FunctionToken";
import BadFunctionToken from "./Tokens/BadFunctionToken";

type ViewToken = Token & { render?: React.ReactNode };

export function renderToken(token: ViewToken): React.ReactNode {
    return token.render || token.value;
}

// This function set "render" that reassign tokens, but this ok

/* eslint-disable no-param-reassign */
export function highlightTokens(tokens: Token[], caret?: number | null): ViewToken[] {
    const brackets: Array<Token> = [];
    let isFound = false;

    tokens.forEach((token) => {
        if (token.value === "(") {
            brackets.push(token);
            return;
        }

        if (token.value === ")") {
            const bracket = brackets.pop();

            if (bracket) {
                if (isFound || caret === undefined) {
                    return;
                }
                const isNearCaret =
                    caret === token.startPosition ||
                    caret === token.startPosition + 1 ||
                    caret === bracket.startPosition ||
                    caret === bracket.startPosition + 1;

                if (isNearCaret) {
                    token.render = <BracketHighlightToken>{token.value}</BracketHighlightToken>;
                    bracket.render = <BracketHighlightToken>{bracket.value}</BracketHighlightToken>;
                    isFound = true;
                }
            } else {
                token.render = <ErrorToken>{token.value}</ErrorToken>;
            }
        }

        if (token.type === "fnName") {
            token.render = <FunctionToken>{token.value}</FunctionToken>;
        }
    });

    brackets.forEach((bracket) => {
        bracket.render = <ErrorToken>{bracket.value}</ErrorToken>;
    });

    return tokens;
}

/* eslint-enable no-param-reassign */

export function highlightBadFunction(
    initProblemTree: TriggerTargetProblem,
    initTokens: ViewToken[],
    container: HTMLElement | null
): React.ReactElement {
    let symbolsOffset = 0;
    let tokens = [...initTokens];

    const getValues = (problemTree: TriggerTargetProblem): React.ReactNode => {
        let name: React.ReactNode = problemTree.argument;
        const tokenIndex = tokens.findIndex((token) => {
            if (token.value === name) {
                return true;
            }
            return token.type === "string" ? token.value.slice(1, -1) === name : false;
        });
        if (tokenIndex === -1) {
            return null;
        }
        const beforeNameTokens = tokens.slice(0, tokenIndex);

        name = problemTree.type ? (
            <BadFunctionToken
                message={problemTree.description ?? "Unknown problem"}
                type={problemTree.type}
                container={container}
            >
                {name}
            </BadFunctionToken>
        ) : (
            renderToken(tokens[tokenIndex])
        );

        const usedTokens = tokenIndex + 1;
        symbolsOffset = tokens
            .slice(0, usedTokens)
            .reduce((count, token) => count + token.value.length, symbolsOffset);
        tokens = tokens.slice(usedTokens);

        const childrenElements = problemTree.problems
            ? problemTree.problems.map((problem) => getValues(problem))
            : null;

        return (
            <>
                {beforeNameTokens.map(renderToken)}
                {name}
                {childrenElements}
            </>
        );
    };

    return (
        <>
            {getValues(initProblemTree)}
            {tokens.map(renderToken)}
        </>
    );
}