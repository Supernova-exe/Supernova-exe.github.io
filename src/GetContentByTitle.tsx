import React from "react";
import {Body} from "./types";

const url : string = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clur3o334009607w0k3camn37/master"

interface Content {
    body: Body,
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
                    query Contents($title: String!) {
                        contents(where : {title: $title})
                        {
                            body
                            {
                                html
                            }
                        }
                    }`,
                    variables: {
                        title: title
                    }
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
            <div dangerouslySetInnerHTML={{__html: content.body.html}}/>
        </div>
    );
}

export default GetContentByTitle;