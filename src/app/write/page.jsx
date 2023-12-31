"use client";
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

import styles from "./write.module.css";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css"
function Write() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("")
  const editor = useRef(null);
	const [content, setContent] = useState('');
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input}/>
      <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
          <Image src="/plus.png" alt="plus" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="image" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="external" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="video" width={16} height={16} />
            </button>
          </div>
        )}
       <JoditEditor
			ref={editor}
			value={content}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent =>  setContent(newContent)
      
      }
		/>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}

export default Write;
