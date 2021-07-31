import { ComponentChildren } from "preact";
import {
  Block,
  BlockColor,
  CodeBlockPath,
  Program,
  VisualBlock,
} from "src/types/Program";
import { match } from "ts-adt";
import "../styles/codeBlock.css";

interface CodeBlockProps {
  block: Block;
  highlighted: CodeBlockPath | null;
}

const blockColor = (block: Block): BlockColor => {
  switch (block._type) {
    case "repeat":
      return "blue";
    case "swap":
      return "yellow";
  }
};

const blockChildren = (block: Block): Program => {
  switch (block._type) {
    case "repeat":
      return block.program;
    case "swap":
      return [];
  }
};

const CodeBlockHighlight = (props: { children: ComponentChildren }) => {
  return <span className="code-block__highlight">{props.children}</span>;
};

const CodeBlockHead = (props: { block: Block }) => {
  switch (props.block._type) {
    case "repeat":
      return (
        <>
          Repeat
          <CodeBlockHighlight>{props.block.times}</CodeBlockHighlight>
          times
        </>
      );
    case "swap":
      return (
        <>
          Swap
          <CodeBlockHighlight>{props.block.cups[0]}</CodeBlockHighlight>
          with
          <CodeBlockHighlight>{props.block.cups[1]}</CodeBlockHighlight>
        </>
      );
  }
};

export const CodeBlock = (props: CodeBlockProps) => {
  return (
    <div
      className={[
        "code-block",
        `code-block--${blockColor(props.block)}`,
        props.highlighted?.length === 0 && "code-block--highlighted",
      ].join(" ")}
    >
      <div className="code-block__title">
        <CodeBlockHead block={props.block} />
      </div>
      <div className="code-block__children">
        {blockChildren(props.block).map((child, index) => {
          const highlighted =
            index === props.highlighted?.[0]
              ? props.highlighted?.slice(1)
              : null;

          return (
            <CodeBlock highlighted={highlighted} block={child} key={index} />
          );
        })}
      </div>
    </div>
  );
};
