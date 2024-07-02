import React, { useState } from "react";
import { DeleteTwoTone } from "@mui/icons-material";
import EditNoteTwoToneIcon from '@mui/icons-material/EditNoteTwoTone';
import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  function handleDelete() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    props.onEdit(props.id, { title, content });
    setIsEditing(false);
  }

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  return (
    <div className="note">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="Note"
          />
          <button onClick={handleSave} ><DoneTwoToneIcon fontSize="small"/></button>
        </div>
      ) : (
        <div>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <div className="btn">
            <button className="delete" onClick={handleDelete} ><DeleteTwoTone fontSize="small"/></button>
            <button className="edit" onClick={handleEdit} ><EditNoteTwoToneIcon fontSize="small" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Note;
