// frontend/src/submit.js

import { useStore } from './store'; // Store se nodes aur edges layenge

export const SubmitButton = () => {
    // Nodes aur Edges nikalne ke liye selector
    const { nodes, edges } = useStore((state) => ({
        nodes: state.nodes,
        edges: state.edges,
    }));

    const handleSubmit = async () => {
        try {
            // 1. Backend ko data bhejo
            const response = await fetch('https://pipeline-backend-ipkp.onrender.com/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges }), // Data JSON format mein
            });

            // 2. Response receive karo
            const data = await response.json();

            // 3. User ko Alert dikhao
            alert(`
                Pipeline Analysis:
                ------------------
                Number of Nodes: ${data.num_nodes}
                Number of Edges: ${data.num_edges}
                Is DAG (No Loops): ${data.is_dag}
            `);

        } catch (error) {
            console.error(error);
            alert("Error: Backend se connect nahi ho pa raha. Kya backend server chal raha hai?");
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    );
}