import React, { Component } from 'react'
import { Editor } from '@tinymce/tinymce-react';
// import { text } from '@fortawesome/fontawesome-svg-core';

export default class TinyComponent extends Component {
    state = {
        content: ""
    };
    render() {
        return (
            <div>
                <Editor
                    apiKey='znpuq7j2yaeh81cu1qnji7lgwuk37vrh98wvrxs01b3yp5qv'
                    onEditorChange={(text) => { this.setState({ content: text }) }}
                    value={this.state.content}
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat |image help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
            </div>
        )
    }
}
