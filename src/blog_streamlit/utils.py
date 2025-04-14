import json

def load_json(file_path):
    """
    Load and return JSON data from a file
    
    Args:
        file_path (str): Path to the JSON file
        
    Returns:
        dict or list: Parsed JSON data
    """
    with open(file_path, 'r') as f:
        return json.load(f) 