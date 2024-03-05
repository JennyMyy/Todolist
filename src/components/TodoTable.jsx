
export default function TodoTable(props) {

    return (
        <table>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
                {props.todos.map((desc, index) => (
                    <tr key={index}>
                        <td>{desc.date}</td>
                        <td>{desc.description}</td>
                        <td><button onClick={() => props.poistaTehtava(index)}>Delete</button></td>

                    </tr>
                ))}
        </table>

    );

}