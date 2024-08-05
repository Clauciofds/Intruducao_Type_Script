# Import the Python SDK
import google.generativeai as genai




genai.configure(api_key='AIzaSyC-77mz_vIHY7skKwLYg0jzCRnL5eWiKRk')
#genai.configure(api_key=GOOGLE_API_KEY)

for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)

generation_config = {
    'candidate_count': 1
}

safecty_settings = {
    'HARASSMENT': 'BLOCK_NONE',
    'HATE': 'BLOCK_NOME',
    'SEXUAL': 'BLOCK_NONE',
    'DANGEROUS': 'BLOCK_NONE'
}

model = genai.GeneratioveModel(model_name = "gemini.1.0-pro",
                               generation_config = generation_config,
                               )

chat = model.start_chat(history=[])

while prompt != 'sair':
    response = cha.send_message(promt)
    print('Resposta: ', response.text, '\n')
    prompt = input('Esperand prompt: ')

import textwrap
from IPython.display import display
from IPython.display import Markdown

def to_markdown(text):
    text = text.replace('.', ' *')

    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))


for message in chat.history:
    display(to_makdown(f'**{message.role}**: {message.parts[0].text}'))
    print('------------------------------------------------')