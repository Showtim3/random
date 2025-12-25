from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ReviewRequest(BaseModel):
    review_text: str

@app.get("/health")
def health_check():
    return {"status": "ok"}

# { "review_text": "The product stopped working after two days." }
# ⚙ Requirements
# 1. Endpoint: /analyze
# Accepts a POST request with a JSON payload:
# { "review_text": "The product stopped working after two days." }
# The endpoint should:
# Use an AI function to generate up to 3 tags (mock the OpenAI call but include the prompt and logic you would send). Example:
# def get_ai_tags(review_text: str) -> List[str]:
# """
# Mocked OpenAI call.
# Include the prompt you would send (not an actual API call).
# Return mock tags like ['product failure', 'durability', 'customer dissatisfaction'].
# """
# pass

def call_ai(prompt: str):
    pass

def get_ai_tags(review_text: str):
    prompt = f"""
        You are given a text-based review from a customer, 
        output upto three tags. Give me a comma seperate string.
        NOTE: Dont include anything else other than the tags which are simple words.
        Here is an example:
        for this review text: "The product stopped working after two days."
        Tags: 'product failure', 'durability', 'customer dissatisfaction'.
        Here is the review: 
        {review_text}
    """
    # split the string on commas.
    tags = call_ai(prompt)
    
    return ['product failure', 'durability', 'customer dissatisfaction']

@app.post('/analyse')
def analyse(payload: ReviewRequest):
    print(payload)
    review_text = payload.review_text
    tags = get_ai_tags(review_text)
    return tags
