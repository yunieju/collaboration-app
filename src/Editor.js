import React from "react";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { QuillBinding } from "y-quill";
import ReactQuill from "react-quill";
import QuillCursors from "quill-cursors";
import "react-quill/dist/quill.snow.css";

const Editor = () => {
  let quillRef = null;
  let reactQuillRef = null;

  React.useEffect(() => {
    attachQuillRefs();

    const ydoc = new Y.Doc();
    const provider = new WebrtcProvider("collab-demo-room", ydoc);
    const ytext = ydoc.getText("quill");

    const binding = new QuillBinding(ytext, quillRef, provider.awareness);
  }, [quillRef]);

  const attachQuillRefs = () => {
    if (typeof reactQuillRef.getEditor !== "function") return;
    quillRef = reactQuillRef.getEditor();
  };

  return (
    <div>
      <ReactQuill
        ref={(el) => {
          reactQuillRef = el;
        }}
        theme={"snow"}
      />
    </div>
  );
};

export default Editor;
