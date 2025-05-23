import os
import whisper
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
from TTS.api import TTS

# Step 1: Transcribe English audio using Whisper
def transcribe_audio(audio_path):
    print("[INFO] Transcribing English audio with Whisper...")
    model = whisper.load_model("base")
    result = model.transcribe(audio_path)
    return result["text"]

# Step 2: Translate English to Telugu using NLLB
def translate_text(text):
    print("[INFO] Translating to Telugu using NLLB...")
    model_name = "facebook/nllb-200-distilled-600M"
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

    # Use the correct target language code for Telugu
    tgt_lang = "tel_Telu"
    print("Supported language codes:", tokenizer.lang_code_to_id.keys())

    inputs = tokenizer(text, return_tensors="pt")
    inputs["forced_bos_token_id"] = tokenizer.lang_code_to_id[tgt_lang]

    translated_tokens = model.generate(**inputs, max_length=512)
    translated_text = tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]
    return translated_text

# Step 3: Convert translated Telugu text to speech using Coqui TTS
# Step 3: Convert translated Telugu text to speech using Coqui TTS
from gtts import gTTS

def synthesize_speech(text, language="te"):
    print("[INFO] Synthesizing Telugu audio using gTTS...")
    tts = gTTS(text=text, lang=language)
    tts.save("output.wav")
    return "output.wav"

# Step 4: Run the pipeline
def main(audio_path):
    text = transcribe_audio(audio_path)
    print("[ENGLISH TEXT]:", text)

    translated = translate_text(text)
    print("[TELUGU TRANSLATION]:", translated)

    output_audio = synthesize_speech(translated, language="te")
    print(f"[INFO] Telugu audio saved as: {output_audio}")

if __name__ == "__main__":
    input_audio = "input.wav"  # Replace with your actual input file
    if not os.path.exists(input_audio):
        print(f"[ERROR] Audio file not found: {input_audio}")
    else:
        main(input_audio)
