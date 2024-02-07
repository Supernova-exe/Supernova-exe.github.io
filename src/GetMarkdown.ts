import {useEffect, useState} from "react";

function GetMarkdown(path: string) : string
{
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        import(("./markdown/" + path))
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    });
    return markdown;
}
export default GetMarkdown;