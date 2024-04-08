import React from "react";
import Markdown from "react-markdown";

const url : string = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clur3o334009607w0k3camn37/master"

interface Content {
    body: string,
}
interface GetContentByTitleProps {
    title : string;
}

const GetContentByTitle: React.FC<GetContentByTitleProps> = ({title}) => {
    const [content, setContent] = React.useState<Content | null>(null);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    // language=GraphQL
                    query: `
                    query Contents {
                        contents(where : {title: "${title}"})
                        {
                            body
                        }
                    }
`
                })
            });

            const data = await response.json();
            setContent(data["data"]["contents"][0]);
        };

        fetchData()
    }, [title]);

    if (!content) {
        return null;
    }

    return (
        <div>
            <Markdown>{content.body}</Markdown>
        </div>
    );
}

export default GetContentByTitle;