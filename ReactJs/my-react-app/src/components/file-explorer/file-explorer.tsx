import { useState } from "react";
import "./file-explorer.css";

const dataJson = [
    {
        "name": "public",
        "isFolder": true,
        "children": [
            {
                "name": "index.html",
                "isFolder": false,
            }

        ]
    },
      {
        "name": "src",
        "isFolder": true,
        "children": [
            {
                "name": "components",
                "isFolder": true,
                "children": [
                    {
                        "name": "Button.js",
                        "isFolder": false,
                    },
                    {
                        "name": "Input.js",
                        "isFolder": false,
                    }
                ]
            },
            {
                "name": "App.js",
                "isFolder": false,
            },
            {
                "name": "index.js",
                "isFolder": false,
            }
        ]
    },
      {
        "name": "package.json",
        "isFolder": false,
    }
];

const SingleFile = ({item, level, onClickAddFolder, onClickAddFile}, ) => {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
  const onClickFolder = () => {
    setIsFolderOpen((prev) => !prev)
  }

    
    return (
        <div style={{ marginLeft: level * 20 }} >
            {item.isFolder && <span onClick={onClickFolder} className="folder-item">{isFolderOpen ? '-' : '+'}</span>}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {item.isFolder ? "📁" : "📄"} {item.name}
                {item.isFolder && (
                    <>
                        <button style={{ marginLeft: 8 }} onClick={onClickAddFolder}>Add folder</button>
                        <button style={{ marginLeft: 4 }} onClick={onClickAddFile}>Add file</button>
                    </>
                )}
            </span>
            {isFolderOpen && item.isFolder && item.children && item.children.map((child, index) => (
                <SingleFile key={index} item={child} level={level + 1} onClickAddFolder={() => {}} onClickAddFile={() => {}}/>
            ))}
        </div>
    );
}




const FileExplorer = () => {
    const [ data, setData ] = useState(dataJson);
    const renderFileTree = (data, level) => {
        return <SingleFile item={data} level={level} onClickAddFolder={() => {}} onClickAddFile={() => {}}/>
    }

      return (
    <div className="file-explorer">
      <h2>File Explorer</h2>
      {data.map((item) => renderFileTree(item, 0))}
    </div>
  );
};

export default FileExplorer;