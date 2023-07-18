import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill-emoji/dist/quill-emoji.css";
import quillEmoji from "quill-emoji";

Quill.register(
  {
    "formats/emoji": quillEmoji.EmojiBlot,
    "modules/emoji-toolbar": quillEmoji.ToolbarEmoji,
    "modules/emoji-textarea": quillEmoji.TextAreaEmoji,
    "modules/emoji-shortname": quillEmoji.ShortNameEmoji,
  },
  true
);

const modules = {
  toolbar: [
    ["bold", "italic", "strike", "link"],
    [{ list: "bullet" }],
    [{ list: "ordered" }],
    [{ align: [] }],
    ["blockquote", "code-block", "emoji"],
  ],
  "emoji-toolbar": true,
  "emoji-textarea": false,
  "emoji-shortname": true,
};

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <form className="editor" onSubmit={(event) => sendChat(event)}>
        <ReactQuill
          theme="snow"
          placeholder="Chat here ..."
          value={msg}
          onChange={setMsg}
          className="editor-input"
          modules={modules}
        />
        <button className="button">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  
  .editor {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    top:-50%;
    .editor-input {
      background-color: #080420;
      color: white;
      height: 70%;
      width: 100%;
      placeholder{
        color:#fff;
      }
    }
    
    .button {
      background-color: #9a86f3;
      border-radius: 3px;
      color: #fff;
      font-size: 24px;
      border: none;
      position: relative;
      top: 32px;
      left: -22px;
      margin:7px 0;
    }
  }
  .ql-toolbar.ql-snow { border: none !important;}
  }
  .ql-container.ql-snow { border: none !important;
  }
  .q1-container.q1-editor data-placeholder{
    color:#fff;
  }
  }
`;
