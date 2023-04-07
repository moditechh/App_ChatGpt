from flask import Blueprint, request, jsonify, render_template, send_file, url_for
from api.config import Config
import openai
import io
import os
from gtts import gTTS
from datetime import datetime, timedelta

transcription_bp = Blueprint('transcription', __name__)


def interpret(question):

    prompt = f"Q: {question}\nA:"
    print(question)

# Configuração Resposta do Chatgpt
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=prompt,
        max_tokens=3000,
        n=1,
        stop=None,
        temperature=0.7
    )

    answer = response.choices[0].text.strip()

    return answer


@transcription_bp.route('/audio=<string:audio_name>')
def audio(audio_name):
    return send_file(f'static/answers/{audio_name}', mimetype='audio/mp3')


@transcription_bp.route('/transcribe', methods=['POST', 'GET'])
def transcribe():

    # Caminho da pasta que você deseja limpar
    caminho_da_pasta = 'api/static/answers'


    # Loop para excluir cada arquivo dentro da pasta
    for nome_do_arquivo in os.listdir(caminho_da_pasta):
        caminho_do_arquivo = os.path.join(caminho_da_pasta, nome_do_arquivo)
        if os.path.isfile(caminho_do_arquivo):
            os.remove(caminho_do_arquivo)
        if request.method == 'GET':
            return render_template('transcribe.html')

    # audio = request.files.get('audio')

    # if audio is None or audio.filename == '':
    #     return jsonify({'message': 'Audio file not found'}), 400

    # # Salva o arquivo de áudio com um carimbo de data/hora
    # timestamp = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    # audio_name = f"{os.path.splitext(audio.filename)[0]}_{timestamp}.wav"
    # audio.save(f"{audio_name}")

    # with open(audio_name,'rb') as file:
    #     transcription=openai.Audio.transcribe('whisper-1',file)
    text = request.form.get('texto')
    answer = interpret(text)

    tts = gTTS(text=answer, lang='pt-br')

    voice_file = f'_answer.mp3'
    tts.save(f'api/static/answers/{voice_file}')

    return render_template('answer_page.html', voice_file=voice_file, pergunta=text)
