from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx # Graph calculation ke liye

app = FastAPI()

# CORS allow karna zaroori hai taaki React se request aa sake
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Sabko allow kar rahe hain abhi ke liye
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[dict]
    edges: List[dict]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: Pipeline):
    # 1. Nodes aur Edges count karo
    num_nodes = len(pipeline.nodes)
    num_edges = len(pipeline.edges)

    # 2. Check karo ki DAG (Directed Acyclic Graph) hai ya nahi
    # Iske liye hum NetworkX library use karenge
    G = nx.DiGraph()
    
    for node in pipeline.nodes:
        G.add_node(node['id'])
    
    for edge in pipeline.edges:
        G.add_edge(edge['source'], edge['target'])

    # Agar graph mein koi cycle (loop) hai, to wo DAG nahi hai
    is_dag = nx.is_directed_acyclic_graph(G)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }