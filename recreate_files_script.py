import os

def recreate_files(input_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    current_file = None
    current_content = []
    
    for line in lines:
        if line.startswith("File: "):
            if current_file:
                with open(current_file, 'w', encoding='utf-8') as f:
                    f.write(''.join(current_content))
            current_content = []
            current_file = line[len("File: "):].strip()
            if not os.path.exists(os.path.dirname(current_file)):
                os.makedirs(os.path.dirname(current_file))
        else:
            current_content.append(line)
    
    if current_file:
        with open(current_file, 'w', encoding='utf-8') as f:
            f.write(''.join(current_content))

if __name__ == "__main__":
    input_file = 'file_contents_output.txt'
    recreate_files(input_file)
