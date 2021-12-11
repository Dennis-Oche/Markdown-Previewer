import React, { useState, useEffect} from "react";
import marked from 'marked';
import './App.css';

const App = () => {
    const [text, setText] = useState('');

    const textChange = (e) => {
        setText(e.target.value);
    };
    
    const markdown = marked(text, {breaks: true});

    const initialState = `
        This is a paragraph

        **This is bolded text**

        # header1
        ## Header2

        >And this is a blockquote. Yay!

        - list item 1
        - list item 2
        - list item 3

        [This is a google link](google.com)

        This is an inline \`<div></div>\`

        Below is a block of code

        \`\`\`
            let x = 1;
            let y = 2;
            let z = x + y;
        \`\`\`

        ![W3schools game](https://www.w3schools.com/images/w3lynx_200.png)
        
    `;

    const defState = () => {
        setText(marked(initialState, {breaks: true}));
    };

    useEffect(() => {
        defState();
    }, []);

    return (
        <div className="mainContainer">
            <h1 className="Title">MARKDOWN TO HTML PREVIEWER</h1>
            <div className="editorContainer">
                <div className="markedinput">
                    <h2>Markdown Text</h2>
                    <textarea
                        id="editor"
                        onChange={textChange}
                    >
                        {initialState}
                    </textarea> 
                </div>

                <hr/>

                <div className="result">
                    <h2>Converted Text</h2>
                    <div id="preview" dangerouslySetInnerHTML={{__html: markdown}} />
                </div>
            </div>
        </div>
    )
}

export default App;
