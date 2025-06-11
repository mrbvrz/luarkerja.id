"use client";

import {
  useLexicalComposerContext,
} from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  $createParagraphNode,
  $getRoot,
  $createTextNode,
} from "lexical";
import {
  $wrapNodes,
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import {
  TOGGLE_LINK_COMMAND,
  $isLinkNode,
} from "@lexical/link";
import { FORMAT_ELEMENT_COMMAND } from "lexical";

import { useCallback } from "react";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  const format = (command: any, value?: any) => {
    editor.dispatchCommand(command, value);
  };

  return (
    <div className="flex flex-wrap gap-2 mb-2 p-2 bg-gray-100 rounded">
      <button onClick={() => format(FORMAT_TEXT_COMMAND, "bold")} className="btn">Bold</button>
      <button onClick={() => format(FORMAT_TEXT_COMMAND, "italic")} className="btn">Italic</button>
      <button onClick={() => format(FORMAT_ELEMENT_COMMAND, "h1")} className="btn">H1</button>
      <button onClick={() => format(FORMAT_ELEMENT_COMMAND, "h2")} className="btn">H2</button>
      <button onClick={() => format(INSERT_UNORDERED_LIST_COMMAND)} className="btn">UL</button>
      <button onClick={() => format(INSERT_ORDERED_LIST_COMMAND)} className="btn">OL</button>
      <button onClick={() => format(REMOVE_LIST_COMMAND)} className="btn">No List</button>
      <button onClick={() => {
        const url = prompt("Enter URL:");
        if (url) {
          editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
        }
      }} className="btn">Link</button>
      <button onClick={() => format(FORMAT_ELEMENT_COMMAND, "code")} className="btn">Code</button>
    </div>
  );
}
