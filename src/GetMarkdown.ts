import {useEffect, useState} from "react";

function removeTitleField(markdownContent: string) : string {
    const lines = markdownContent.split('\n');
    const filteredLines = lines.filter(line => !line.startsWith('title:') && line.trim() !== '---');
    return filteredLines.join('\n');
}

function GetMarkdown(path: string) : string
{
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        import(("./markdown/" + path))
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => {
                        const contentWithoutTitle = removeTitleField(res);
                        setMarkdown(contentWithoutTitle);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });
    if(markdown.startsWith("<!DOCTYPE html>")) return "Error Loading Markdown File"
    return markdown;
}
export default GetMarkdown;