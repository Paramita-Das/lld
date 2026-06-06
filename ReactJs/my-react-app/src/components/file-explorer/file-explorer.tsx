import { useState } from "react";

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

const SingleFile = ({item, level}) => {
    const [isFolderOpen, setIsFolderOpen] = useState(false);
    const onClickFolder = () => {
        setIsFolderOpen(!isFolderOpen);
    }

    const onClickAddFolder = () => {
        // Implement add folder logic
    }
    const onClickAddFile = () => {
        // Implement add file logic
                        <SingleFile key={index} item={child} level={level + 1} />

    }
    return (
        <div style={{ marginLeft: level * 20 }} >
            {item.isFolder && <span onClick={onClickFolder} className="folder-item">{isFolderOpen ? '-' : '+'}</span>}
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                {item.isFolder ? "📁" : "📄"} {item.name}
                {item.isFolder && (
                    <>
                        <button style={{ marginLeft: 8 }} onClick={() => onClickAddFolder}>Add folder</button>
                        <button style={{ marginLeft: 4 }} onClick={() => onClickAddFile}>Add file</button>
                    </>
                )}
            </span>
            {isFolderOpen && item.isFolder && item.children && item.children.map((child, index) => (
                <SingleFile key={index} item={child} level={level + 1} />
            ))}
        </div>
    );
}



const FileExplorer = () => {
    const [ data, setData ] = useState(dataJson);

    const renderFileTree = (data, level = 0) => {
    return data.map((item, index) => (
       <SingleFile key={index} item={item} level={level} />
    ));
};
      return (
    <div className="file-explorer">
      <h2>File Explorer</h2>
      {/* Implement file navigation and management UI here */}
      {renderFileTree(data)}
    </div>
  );
};

export default FileExplorer;