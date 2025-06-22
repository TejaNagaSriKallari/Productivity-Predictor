from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)  # Allow requests from React

# Load the trained model
model = joblib.load('random_forest_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    # Example: features from the React form
    try:
        features = [
            data['job_satisfaction_score'],
            data['work_hours_per_day'],
            data['sleep_hours'],
            data['daily_social_media_time'],
            data['screen_time_before_sleep'],
            data['weekly_offline_hours'],
            data['age'],
            data['number_of_notifications'],
            data['days_feeling_burnout_per_month'],
            data['stress_level']
        ]
        prediction = model.predict([features])
        return jsonify({'prediction': int(prediction[0])})
    
    except KeyError as e:
        return jsonify({'error': f'Missing key in request: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Unexpected error: {str(e)}'}), 500
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))  # Default to 5000 for local testing
    app.run(host='0.0.0.0', port=port)0
