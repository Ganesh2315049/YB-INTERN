 const Page1 = () => {
    const name = "Ganesh B";
    const degree = "Bachelor of Information Technology";
    const gmail = "2315049@nec.edu.in";
    return (
        <div className="page-container">
            <h2>Basic Information</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Degree</th>
                        <th>Gmail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{name}</td>
                        <td>{degree}</td>
                        <td>{gmail}</td>
                    </tr>
                </tbody>
                </table>
        </div>
    );
    };
    export default Page1;
    