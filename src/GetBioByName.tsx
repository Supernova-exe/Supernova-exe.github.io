import React from "react";
import Markdown from "react-markdown";

const url : string = "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clur3o334009607w0k3camn37/master"

interface Bio {
    team: string[],
    body: string,
}
interface GetBioByNameProps {
    name : string;
}
function formatList(list: string[]) : string {
    if(list.length === 0) return "";
    if(list.length === 1) return list[0];
    else if(list.length === 2) return `${list[0]} and ${list[1]}`;
    else {
        let formattedList = "";
        for(let i = 0; i < list.length - 1; i++) {
            formattedList += `${list[i]}, `;
        }
        formattedList += `and ${list[list.length - 1]}`;
        return formattedList;

    }
}
const GetBioByName: React.FC<GetBioByNameProps> = ({name})  => {
    const [bio, setBio] = React.useState<Bio | null>(null);

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
                    query Bios($name: String!) {
                        bios(where: {name: $name}) {
                            team,
                            body,
                        }
                    }`,
                    variables: {
                        name: name
                    }
                })
            });

            const data = await response.json();
            setBio(data["data"]["bios"][0]);
        };

        fetchData()
    }, [name]);

    if (!bio) {
        return null;
    }

    return (
        <div>
            <Markdown>{`**${formatList(bio.team)} Team**

${bio.body}`}</Markdown>
        </div>
    );
}

export default GetBioByName;